import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
    return (
        <Helmet 
            title={`${title} | Whitehat Society @ SMU-SIS`}
        />
    )
}

export default Head;