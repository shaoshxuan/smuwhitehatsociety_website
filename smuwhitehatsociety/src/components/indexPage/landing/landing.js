import React from 'react';
import { Link } from 'gatsby';
import './landing.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    return (
        <div id="home" className="landing">
            <img src={require("../../../assets/hackComp.jpg")} alt="landingBackground"/>
            {/* Photo by Markus Spiske on Unsplash */}
            <div>
                <div className="landingFlag">$_FLAG&#123;5Mu_wH1t3Ha7_50c13Ty&#125;</div>
            </div>
            
            <div className="landingContent">
                <div className="landingHeader">
                    SMU WHITEHAT SOCIETY
                </div>
                <div className="landingBreak"></div>
                <div className="landingOverview">
                    We are a <span style={{color: "#ffd600"}}>Cyber-Security</span> Special Interest Group (SIG) in<br/>
                    Singapore Management University!
                </div>
                <div className="landingBreak"></div>
                <Link to="/#about" className="landingLearnMore">
                    <div>Find Out More!</div>
                    <FontAwesomeIcon icon={ faUserSecret } className="landingFAIcon"/>
                </Link>
            </div>
        </div>
    )
}

export default Landing;