import axios from 'axios';

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
        }
      `,
      variables: {
        shopId: "cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==",
        filter: 'category-', // Replace null with your desired filter value
      },
    });

    const data = response.data; // No need for response.json() since axios already returns the parsed JSON response
    console.log("user query response", data);
    return data;
  } catch (error) {
    console.log("user", error);
    throw new Error('Error sending GraphQL query');
  }
};