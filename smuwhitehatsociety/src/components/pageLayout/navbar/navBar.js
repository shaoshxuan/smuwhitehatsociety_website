import React from 'react';
import { Link } from 'gatsby';
import "./navBar.css";


class NavBar extends React.Component {
    // constructor() {
    //     super();
    //     this.navRef = React.createRef(); 
    // }

    // componentDidMount() {
    //     window.addEventListener("scroll", this.onScroll);
    // }
    // componentWillUnmount() {
    //     window.addEventListener("scroll", this.onScroll);
    // }

    // scrollYOffset = 0;
    // onScroll = () => {
    //     const header = this.navRef.current;

    //     header.classList = "";
    //     if (window.pageYOffset > 0){
    //         if (window.pageYOffset > this.scrollYOffset){
    //             header.classList.add("fadeUp");
    //         }
    //     } else {
    //         header.classList = "";
    //     }
    //     this.scrollYOffset = window.pageYOffset;
    // }

    render() {
        return (
            <header ref={this.navRef}>
                <Link to="/" className="logoContainer">
                    <img src={require("../../../assets/whitehatSoc Logo.png")} alt="whitehatSocLogo"/>
                    <div>SMU Whitehat Society</div>
                </Link>
                <div className="navContainer">
                    <div className="navLinks">
                        <ul>
                            <Link to="/"><li>HOME</li></Link>
                            <a href="#about"><li>ABOUT</li></a>
                            <a href="#team"><li>THE TEAM</li></a>
                            <Link to="/articles"><li>ARTICLES</li></Link>
                            <a href="#contact"><li>CONTACT</li></a>
                            <Link to="/whitehacks"><li id="whitehackText">WHITEHACKS</li></Link>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;