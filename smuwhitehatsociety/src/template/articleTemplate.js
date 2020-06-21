import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/pageLayout/pageLayout.js';
import './articleTemplate.css';

export const query = graphql`
    query (
        $slug: String!
    ){
        contentfulWhitehatSocArticles (
            slug: {
                eq: $slug
            }
        ){
            title
            author
            datePosted (formatString:"MMMM do, YYYY")
            coverPhoto {
                file {
                    url
                }
            }
            article {
                childMarkdownRemark {
                    html
                }
            }
        }
        contentfulExternalArticleRepost (
            slug: {
                eq: $slug
            }
        ){
            title
            author
            datePosted (formatString:"MMMM do, YYYY")
            article {
                childMarkdownRemark {
                    html
                }
            }
            link
        }
    }
`

const ArticleTemplate = (props) => {
    const fromWhich = props.data.contentfulWhitehatSocArticles === null ? props.data.contentfulExternalArticleRepost : props.data.contentfulWhitehatSocArticles;
    return (
        <PageLayout>
            <div className="articlePage">
                <div className="articleContentContainer">
                    <div className="articleTitle">
                        {fromWhich.title}
                    </div>
                    <div className="articleTitleContentBreak"></div>
                    {props.data.contentfulWhitehatSocArticles === null
                        ? null
                        :   
                            fromWhich.coverPhoto === null
                                ?   
                                    <>
                                        <div className="articleCoverPhoto">
                                            <img src={require("../assets/defaultCoverPhoto.png")} alt="articleCoverPhoto"/>
                                        </div>
                                        <div className="articleTitleContentBreak"></div>
                                    </>
                                :
                                    <>
                                        <div className="articleCoverPhoto">
                                            <img src={fromWhich.coverPhoto.file.url} alt="articleCoverPhoto"/>
                                        </div>
                                        <div className="articleTitleContentBreak"></div>
                                    </>
                    }
                    <div className="articleContent">
                        <div dangerouslySetInnerHTML={{__html: fromWhich.article.childMarkdownRemark.html}}></div>
                    </div>
                    <div className="articleTitleContentBreak"></div>
                    {props.data.contentfulExternalArticleRepost === null
                        ? null
                        :   <>
                                <div className="originalLink">
                                    Original Article: <a href={fromWhich.link}>{fromWhich.link}</a>
                                </div>
                                <div className="articleTitleContentBreak"></div>
                            </>
                    }
                    <div className="articleAuthorDatePost">
                        By {fromWhich.author}<br/>
                        {fromWhich.datePosted}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default ArticleTemplate;