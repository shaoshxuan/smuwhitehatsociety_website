import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./navBar.css";


class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            cN: "top",
            scrollYOffset: 0,
            navOpen: false,
            headerCN: "",
        }
        
        this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
        window.addEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        if (window.pageYOffset > 0){
            if (window.pageYOffset > this.state.scrollYOffset){
                this.setState(prevState => ({
                    scrollYOffset: window.pageYOffset,
                    cN: "fadeUp",
                    navOpen: false,
                    headerCN: "",
                }))
            } else {
                this.setState(prevState => ({
                    scrollYOffset: window.pageYOffset,
                    cN: "",
                    navOpen: false,
                    headerCN: "",
                }))
            }
        }
    }

    toggleHamburger = () => {
        this.setState((prevState) => ({
            ...prevState,
            navOpen: !prevState.navOpen,
            headerCN: prevState.navOpen ? "" : "open"
        }))
    }

    render() {
        return (
            <>
                <div role="button" tabIndex={0} className="hamburgerContainer" onClick={this.toggleHamburger} onKeyDown={this.toggleHamburger}>
                    <div className={this.state.navOpen ? "hamburgerMenu open" : "hamburgerMenu"}></div>
                </div>
                <header className={this.state.cN + " " + this.state.headerCN}>
                    <Link to="/" className="logoContainer">
                        <img src={require("../../../assets/whitehatSoc Logo.png")} alt="whitehatSocLogo"/>
                        <div>SMU Whitehat Society</div>
                    </Link>
                    <div className="navContainer">
                        <div className="navLinks">
                            <ul>
                                <Link to="/#home"><li>HOME</li></Link>
                                <AnchorLink to="/#about"><li>ABOUT</li></AnchorLink>
                                <AnchorLink to="/#exco"><li>THE EXCO</li></AnchorLink>
                                <Link to="/articles"><li>ARTICLES</li></Link>
                                <AnchorLink to="/#contact"><li>CONTACT</li></AnchorLink>
                                <Link to="/whitehacks"><li id="whitehackText">WHITEHACKS</li></Link>
                            </ul>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default NavBar;