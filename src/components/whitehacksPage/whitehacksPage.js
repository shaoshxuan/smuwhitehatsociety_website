import React from 'react';
import './whitehacksPage.css';

const WhitehacksPage = () => {
    return (
        <>
            <div className="underDev">
                <img src={require("../../assets/underConstruction.jpg")} alt="In Development"/>
                {/* Photo by EJ Yao on Unsplash */}
                <div className="underDevWords">
                    Hello There!<br/>
                    This page is still under development.<br/>
                    Sorry about that!
                </div>
            </div>
        </>
    )
}

export default WhitehacksPage;