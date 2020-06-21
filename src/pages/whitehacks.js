import React from 'react';
import Head from '../components/head.js';
import PageLayout from '../components/pageLayout/pageLayout.js';

import WhitehacksPage from '../components/whitehacksPage/WhitehacksPage';

const Whitehacks = () => {
    return (
        <>
            <PageLayout>
                <Head title="Whitehacks" />
                <WhitehacksPage />
            </PageLayout>
        </>
    )
}

export default Whitehacks;