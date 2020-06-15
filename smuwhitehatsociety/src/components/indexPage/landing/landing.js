import React from 'react';
import './landing.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    return (
        <div className="landing">
            <img src={require("../../../assets/hackComp.jpg")} alt="landingBackground"/>
            <div>
                <div className="landingFlag">$_FLAG&#123;5Mu_wH1t3Ha7_50c13Ty&#125;</div>
            </div>
            
            <div className="landingContent">
                <div className="landingHeader">
                    SMU WHITEHAT SOCIETY
                </div>
                <div className="landingBreak"></div>
                <div className="landingOverview">
                    We are a <span style={{color: "#ffd600", textShadow: "0 0 10px #181510"}}>Cyber-Security</span> Special Interest Group (SIG) in<br/>
                    Singapore Management University!
                </div>
                <div className="landingBreak"></div>
                <div className="landingBreak"></div>
            </div>
            <a href="#about" className="landingLearnMore">
                <FontAwesomeIcon icon={ faUserSecret } className="landingFAIcon"/>
                <div>Find Out More!</div>
            </a>
        </div>
    )
}

export default Landing;