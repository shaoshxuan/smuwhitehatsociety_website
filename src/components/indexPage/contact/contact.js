import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact sectionPad">
                <div className="sectionHeader">
                        Contact Us
                </div>
                <div className="headerBreak"></div>
                <div className="contactContent">
                    <div className="contactType">
                        For official contact regarding activities, events, and collaborations, we can be reached via email at
                        <div className="headerBreak"></div>
                        <a href="mailto:issig@sa.smu.edu.sg" target="_blank" rel="noopener noreferrer" className="contactEmail">
                            <FontAwesomeIcon icon={ faEnvelope } className="contactFAIcon"/>
                            <div className="emailAddress">issig@sa.smu.edu.sg</div>
                        </a>
                    </div>
                    <div className="contactDivider"></div>
                    <div className="contactType">
                        For more information and to keep up to date about student events and activities, do join our Instagram page and Telegram group!
                        <div className="headerBreak"></div>
                        <div className="contactSocial">
                            <a href="https://www.instagram.com/smuwhitehatsociety/" target="_blank" rel="noopener noreferrer" aria-label="WHInsta" className="contactFAIcon"><FontAwesomeIcon icon={ faInstagram }/></a>
                            <a href="https://t.me/joinchat/ACGGFT9GShqCaJ_7lub42w" target="_blank" rel="noopener noreferrer" aria-label="WHTele" className="contactFAIcon"><FontAwesomeIcon icon={ faTelegram }/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;