import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerBar"></div>
            <div className="footerContent">
                <img src={require("../../../assets/whitehatSoc Logo.png")} alt="whitehatSocLogo"/>
                <div>SMU Whitehat Society</div>
                <div id="developedBy">
                    Developed By SMU Whitehat Society &copy; 2020
                </div>
            </div>
        </footer>
    )
}

export default Footer;