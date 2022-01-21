//Shema preuzeta s: https://github.dev/mcagalj/next-app-prototype .

import { GraphQLClient, gql } from "graphql-request";

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
                        slug
                        cardImage {
                            url
                        }
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

    static async getPublishers({ preview = false } = {}) {
        const query = gql`
            query getPublishers($preview: Boolean!) {
                publisherCollection(preview: $preview) {
                    publishers: items {
                        id
                        name
                        logo {
                            url
                        }
                        collections: collectionsCollection(limit: 15) {
                            items {
                                categories: categoriesCollection(limit: 5) {
                                    items {
                                        name
                                    }
                                }
                            }
                        }
                        slug
                        description
                        location
                        locationIconUri
                        founded
                    }
                }
            }
        `;

        const variables = { preview };
        const response = await this.queryContentful(query, variables);
        const { publishers } = response?.publisherCollection;

        return publishers;
    }

    static async getPost({ slug, preview = false } = {}) {
        const query = gql`
            query getPost($slug: String!, $preview: Boolean!) {
                blogPostCollection(preview: $preview, where: { slug: $slug }) {
                    post: items {
                        id: sys {
                            id
                        }
                        title
                        date
                        text
                        types: typeCollection {
                            items {
                                name
                            }
                        }
                        author {
                            name
                            id
                            authorPhoto {
                                url
                            }
                        }
                    }
                }
            }
        `;

        const variables = { slug, preview };
        const response = await this.queryContentful(query, variables);
        const post = response?.blogPostCollection?.post?.pop();

        return post;
    }

    static async getSlugs({ preview = false } = {}) {
        const query = gql`
            query getSlugs($preview: Boolean!) {
                blogPostCollection(preview: $preview) {
                    posts: items {
                        slug
                    }
                }
            }
        `;

        const variables = { preview };
        const response = await this.queryContentful(query, variables);
        const { posts } = response?.blogPostCollection;
        const slugs = posts.map((post) => post.slug);

        return slugs;
    }

    static async getCollections({ preview = false } = {}) {
        const query = gql`
            query getCollections($preview: Boolean!) {
                collectionCollection(preview: $preview) {
                    collections: items {
                        name
                        id
                        stickers
                        coverPhoto {
                            url
                        }
                        releaseYear
                        numberOfStickers
                        publisher {
                            id
                            name
                            logo {
                                url
                            }
                        }
                        categories: categoriesCollection {
                            items {
                                name
                            }
                        }
                    }
                }
            }
        `;

        const variables = { preview };
        const response = await this.queryContentful(query, variables);
        const { collections } = response?.collectionCollection;

        return collections;
    }

    static async getPublisherSlugs({ preview = false } = {}) {
        const query = gql`
            query getSlugs($preview: Boolean!) {
                publisherCollection(preview: $preview) {
                    publishers: items {
                        slug
                    }
                }
            }
        `;

        const variables = { preview };
        const response = await this.queryContentful(query, variables);
        const { publishers } = response?.publisherCollection;
        const slugs = publishers.map((publisher) => publisher.slug);

        return slugs;
    }

    static async getPublisher({ slug, preview = false } = {}) {
        const query = gql`
            query getPublisher($slug: String!, $preview: Boolean!) {
                publisherCollection(preview: $preview, where: { slug: $slug }) {
                    publishers: items {
                        id
                        name
                        logo {
                            url
                        }
                        collections: collectionsCollection(limit: 15) {
                            items {
                                categories: categoriesCollection(limit: 5) {
                                    items {
                                        name
                                    }
                                }
                            }
                        }
                        description
                        location
                        locationIconUri
                        founded
                    }
                }
            }
        `;

        const variables = { slug, preview };
        const response = await this.queryContentful(query, variables);
        const publisher = response?.publisherCollection?.publishers?.pop();

        return publisher;
    }
}

export default DataSourceAPI;
