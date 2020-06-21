import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import ArticleLayout from './articleLayout/articleLayout.js';
import './articles.css';

const Articles = (props) => {
    const allArticles = useStaticQuery(graphql`
        query {
            allContentfulWhitehatSocArticles {
                edges {
                    node {
                        internal {
                            type
                        }
                        title
                        slug
                        author
                        datePosted (formatString:"MMMM Do, YYYY")
                        coverPhoto {
                            file {
                                url
                            }
                        }
                        article {
                            article
                        }
                    }
                }
            }
            allContentfulExternalArticleRepost {
                edges {
                    node {
                        internal {
                            type
                        }
                        title
                        slug
                        author
                        datePosted (formatString:"MMMM Do, YYYY")
                        article {
                            article
                        }
                    }
                }
            }
        }
    `)
    const mergeArticles = [...allArticles.allContentfulWhitehatSocArticles.edges, ...allArticles.allContentfulExternalArticleRepost.edges];

    return (
        <div className="allArticles">
            {mergeArticles.sort((a, b) => (b.datePosted - a.datePosted)).map((article) => {
                if (props.filter === "All"){
                    return (
                        <ArticleLayout 
                            type = {article.node.internal.type === "ContentfulWhitehatSocArticles" ? "WhitehatSoc Post" : "External Repost"}
                            title = {article.node.title}
                            slug = {article.node.slug}
                            author = {article.node.author}
                            datePosted = {article.node.datePosted}
                            coverPic = {article.node.coverPhoto ? article.node.coverPhoto.file.url : null}
                            article = {article.node.article}
                        />
                    )
                } else if (props.filter === article.node.internal.type){
                    return (
                        <ArticleLayout 
                            type = {article.node.internal.type === "ContentfulWhitehatSocArticles" ? "WhitehatSoc Post" : "External Repost"}
                            title = {article.node.title}
                            slug = {article.node.slug}
                            author = {article.node.author}
                            datePosted = {article.node.datePosted}
                            coverPic = {article.node.coverPhoto ? article.node.coverPhoto.file.url : null}
                            article = {article.node.article}
                        />
                    )
                }
                return null
            })}
        </div>
    )
}

export default Articles;