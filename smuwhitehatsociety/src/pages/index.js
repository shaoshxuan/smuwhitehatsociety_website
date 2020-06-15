import React from 'react';
import "../styles/index.css";
import PageLayout from '../components/pageLayout/pageLayout.js';

import Landing from "../components/indexPage/landing/landing";

const IndexPage = () => {
    return (
        <>
            <PageLayout>
                <Landing />
                {/* <About /> */}
                {/* <TheTeam /> */}
                {/* <Contact /> */}
            </PageLayout>
        </>
    )
}

export default IndexPage;
