import React from 'react';
import { Link } from 'gatsby';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            navOpen: false,
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(prevState => ({
            navOpen: !this.state.navOpen,
        }))
    }

    render() {
        return (
            <header>
                <div className="logoContainer">
                    {/* *insert whitehats logo* */}
                </div>
                <div className="navContainer">
                    <div className="navLinks">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">THETEAM</a></li>
                            <li><Link to="/articles">ARTICLES</Link></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><Link to="/whitehacks">WHITEHACKS</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;