import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
    return (
        <Helmet 
            title={`${title} | Whitehat Society @ SMU-SIS`}
        >
            <link rel="icon" href={require("../../static/favicon.ico")} />
        </Helmet>
    )
}

export default Head;