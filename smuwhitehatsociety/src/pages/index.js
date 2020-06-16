import React from 'react';
import "../styles/index.css";
import PageLayout from '../components/pageLayout/pageLayout.js';

import Landing from "../components/indexPage/landing/landing";
import About from "../components/indexPage/about/about";
import TheExco from "../components/indexPage/theExco/theExco";

const IndexPage = () => {
    return (
        <>
            <PageLayout>
                <Landing />
                <About />
                <TheExco />
                {/* <Contact /> */}
            </PageLayout>
        </>
    )
}

export default IndexPage;
