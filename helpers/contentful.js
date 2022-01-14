import { GraphQLClient, gql } from "graphql-request";

console.log(process.env);
const graphQLClient = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`);

class DataSourceAPI {
    static queryContentful(query, variables = {}) {
        const requestHeaders = {
            Authorization: `Bearer ${variables?.preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
        };

        try {
            return graphQLClient.request(query, variables, requestHeaders);
        } catch (error) {
            throw new Error("Could not fetch data from Contentful!");
        }
    }

    static async getPosts({ preview = false } = {}) {
        const query = gql`
            query getPosts($preview: Boolean!) {
                blogPostCollection(preview: $preview) {
                    cards: items {
                        sys {
                            id
                        }
                        title
                        description
                        date
                        types: typeCollection {
                            items {
                                name
                            }
                        }
                        author {
                            name
                            authorPhoto {
                                title
                                url
                            }
                        }
                    }
                }
            }
        `;

        const variables = { preview };
        const response = await this.queryContentful(query, variables);
        const { cards } = response?.blogPostCollection;

        return cards;
    }
}

export default DataSourceAPI;
