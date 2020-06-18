import React from 'react';

const ExcoMember = (props) => {
    return (
        <div className="excoMemberContainer">
            <div className="dpContainer">
                <div className="excoRotateRing"></div>
                <div className="excoOuterRing"></div>
                <img src={props.profilePic} alt="placeholderDP" className="excoDP"/>
                <div className="excoInnerRing"></div>
            </div>
            <div className="excoName">
                {props.name}
            </div>
            <div className="excoRole">
                {props.role}
            </div>
        </div>
    )
}

export default ExcoMember;