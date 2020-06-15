import React from 'react';
import "../styles/index.css";
// import { Link } from 'gatsby';

import PageLayout from '../components/pageLayout/pageLayout.js';

const IndexPage = () => {
    return (
        <>
            <PageLayout>
                <h1>Index Page</h1>
                <div style={{height: "100vh"}}></div>
            </PageLayout>
        </>
    )
}

export default IndexPage;
