export const sendGraphQLQuery = async (query) => {
  try {
    // Perform the necessary logic to send the GraphQL query
    const response = await axios.post("https://test.bizb.store/graphql", {
      query: `
      query getTags($shopId: ID!, $filter: String) {
        tags(shopId: $shopId, filter: $filter) {
          nodes {
            _id
            displayTitle
            slug
            heroMediaUrl
            name
            metafields {
              key
              value
            }
          }
        }
      }`,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error sending GraphQL query');
  }
};