import React from 'react';
import "../styles/index.css";
import PageLayout from '../components/pageLayout/pageLayout.js';
import Head from '../components/head.js';

import Landing from "../components/indexPage/landing/landing.js";
import About from "../components/indexPage/about/about.js";
import TheExco from "../components/indexPage/theExco/theExco.js";
import Contact from "../components/indexPage/contact/contact.js";

const IndexPage = () => {
    return (
        <>
            <PageLayout>
                <Head title="Home"/>
                <Landing />
                <About />
                <TheExco />
                <Contact />
            </PageLayout>
        </>
    )
}

export default IndexPage;
