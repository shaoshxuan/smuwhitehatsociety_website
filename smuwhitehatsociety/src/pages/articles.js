import React from 'react';
// import { Link } from 'gatsby';
import PageLayout from '../components/pageLayout/pageLayout.js';
import ArticlesPage from '../components/articlesPage/articlesPage';

const Articles = () => {
    return (
        <>
            <PageLayout>
                <ArticlesPage />
            </PageLayout>
        </>
    )
}

export default Articles;