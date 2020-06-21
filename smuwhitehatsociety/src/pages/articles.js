import React from 'react';
import Head from '../components/head.js';
import PageLayout from '../components/pageLayout/pageLayout.js';
import ArticlesPage from '../components/articlesPage/articlesPage';

const Articles = () => {
    return (
        <>
            <PageLayout>
                <Head title="Articles" />
                <ArticlesPage />
            </PageLayout>
        </>
    )
}

export default Articles;