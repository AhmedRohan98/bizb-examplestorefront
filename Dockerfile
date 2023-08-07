FROM node:14-alpine


ARG NEXTJS_DOTENV

ENV NEXTJS_DOTENV=$NEXTJS_DOTENV

# hadolint ignore=DL3018
RUN apk --no-cache add bash curl less tini vim make
SHELL ["/bin/bash", "-o", "pipefail", "-o", "errexit", "-u", "-c"]

WORKDIR /usr/local/src/app
ENV PATH=$PATH:/usr/local/src/app/node_modules/.bin
# env variables
ENV CANONICAL_URL https://test.bizb.store
ENV BUILD_GRAPHQL_URL https://test.bizb.store/graphql
ENV EXTERNAL_GRAPHQL_URL https://test.bizb.store/graphql
ENV INTERNAL_GRAPHQL_URL https://test.bizb.store/graphql
ENV PORT 4000
ENV NODE_ENV development
ENV SEGMENT_ANALYTICS_SKIP_MINIMIZE true
ENV SEGMENT_ANALYTICS_WRITE_KEY ENTER_KEY_HERE
ENV SESSION_MAX_AGE_MS 2592000000
ENV SESSION_SECRET CHANGEME
ENV STRIPE_PUBLIC_API_KEY ENTER_STRIPE_PUBLIC_KEY_HERE
ENV INSTAGRAM_KEY IGQVJWVkhaVFpZAb0l1QXFoTGo1eGh5cnBlVHZAtS0pwSE84VTNQMmZAQTjFzcTZA4R1I0VmxOaWtKcW9HdEg2cFBrTlE1S2I1S00zbGM0Vjc3RW90YVBJbkdRY09GSklKQ09BTWhpNTVwb29fMEoxTTVmeAZDZD
ENV SHOP_ID cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==




# Allow yarn/npm to create ./node_modules
RUN chown node:node .

# Copy specific things so that we can keep the image as small as possible
# without relying on each repo to include a .dockerignore file.
COPY --chown=node:node ./ ./

USER node

# Install ALL dependencies. We need devDependencies for the build command.
RUN yarn install --production=false --frozen-lockfile --ignore-scripts --non-interactive --no-cache

ENV BUILD_ENV=production NODE_ENV=production

# hadolint ignore=SC2046
RUN export $(grep -v '^#' .env.${NEXTJS_DOTENV:-prod} | xargs -0) && NODE_OPTIONS="" yarn build

# Install only prod dependencies now that we've built, to make the image smaller
RUN rm -rf node_modules/*
RUN yarn install --production=true --frozen-lockfile --ignore-scripts --non-interactive

# If any Node flags are needed, they can be set in the NODE_OPTIONS env variable.
CMD ["tini", "--", "yarn", "start"]
LABEL com.reactioncommerce.name="example-storefront"
