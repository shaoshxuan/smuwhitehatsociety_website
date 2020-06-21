import React from 'react';
import NavBar from './navbar/navBar.js';
import Footer from './footer/footer.js';

const PageLayout = (props) => {
    return (
        <>
            <NavBar />
                {props.children}
            <Footer />
        </>
    )
}

export default PageLayout;