const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const articlePage = path.resolve('./src/template/articleTemplate.js');
    const response = await graphql(`
        query {
            allContentfulWhitehatSocArticles {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulExternalArticleRepost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    const mergeNodes = [...response.data.allContentfulWhitehatSocArticles.edges, ...response.data.allContentfulExternalArticleRepost.edges];

    mergeNodes.forEach((edge) => {
        createPage({
            component: articlePage,
            path: `/articles/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}