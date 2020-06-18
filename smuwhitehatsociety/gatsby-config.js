require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'SMU Whitehat Society InfoSite',
        author: 'Shao Shxuan'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-anchor-links',
        'gatsby-plugin-transition-link',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CONTENTFUL_EXCOMEMBERS_SPACE_ID}`,
                accessToken: `${process.env.CONTENTFUL_EXCOMEMBERS_ACCESS_TOKEN}`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CONTENTFUL_ARTICLES_SPACE_ID}`,
                accessToken: `${process.env.CONTENTFUL_ARTICLES_ACCESS_TOKEN}`,
            },
        },
    ],
}
