import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head.js';
import PageLayout from '../components/pageLayout/pageLayout';
import './404styles/404styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <PageLayout>
            <Head title="404" />
            <div className="notFound">
                <div className="notFoundBG">
                    <img src={require("../assets/404.jpg")} alt="Not Found Background"/>
                </div>
                <div className="notFoundTextContainer">
                    <div className="notFoundText">
                        Not all who wander are lost...But it seems like you are!
                    </div>
                    <div className="errorCode">
                        404, Page Not Found!
                    </div>
                    <div className="notFoundText">
                        Fear not, for this link can guide you back!
                        <br/>
                        <Link to="/" className="guideIcon">
                            <FontAwesomeIcon icon={ faCompass } className="landingFAIcon"/>
                        </Link>
                        <br/>
                        Stay safe, fellow adventurer!
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default NotFound;