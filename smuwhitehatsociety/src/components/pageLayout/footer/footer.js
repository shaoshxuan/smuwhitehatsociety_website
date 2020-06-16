import React from 'react';
import { Link } from 'gatsby';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerBar"></div>
            <div className="footerContent">
                <Link to="/">
                    <img src={require("../../../assets/whitehatSoc Logo.png")} alt="whitehatSocLogo"/>
                </Link>
                <div>SMU Whitehat Society</div>
                <div id="developedBy">
                    Developed By SMU Whitehat Society &copy; 2020
                </div>
            </div>
        </footer>
    )
}

export default Footer;