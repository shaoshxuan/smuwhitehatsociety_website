import React from 'react';
import './about.css';

const About = () => {
    return (
        <div id="about">
            <div className="landingBar"></div>
            <div className="about sectionPad">
                <div className="sectionHeader">
                    About Us
                </div>
                <div className="headerBreak"></div>
                <div className="aboutContent">
                    <div className="aboutClubWidth">
                        <div className="aboutClub">
                            Whitehat Society is a special interest group in Singapore Management University (SMU), founded by a group of students who are passionate about information security. Our members train for cyber defence competitions and advocate security knowledge to the SMU's community and beyond.
                        </div>
                    </div>
                    <div className="headerBreak"></div>
                    <div className="sectionHeader">
                        Our Mission
                    </div>
                    <div className="headerBreak"></div>
                    <div className="aboutMission">
                        <div className="mission missionPad">
                            <div className="missionHeader">
                                REPRESENT
                            </div>
                            <div className="headerBreak"></div>
                            <div className="missionDesc">
                                Representing information security students in SMU, for collaboration on information security matters. Whitehat Society is the contact point for external entities such as GovTech, IMDA, CSA and Symantec.<br/><br/>
                                Concurrently, we assist our university community by giving security talks by students or guest speakers, and organizing industry visits.
                            </div>
                        </div>
                        <div className="mission missionPad">
                            <div className="missionHeader">
                                AWARENESS
                            </div>
                            <div className="headerBreak"></div>
                            <div className="missionDesc">
                                Cyber security is crucial and of utmost importance, even more so in today's society. According to CyberSecurity Ventures, the global economic costs from cyber-crime is estimated to reach more than <span style={{ color: "#ffd600"}}>$6 trillion USD annually</span> by 2021, up from $3 trillion back in 2015. This figure excludes the many cyber attacks that go unreported in small-medium companies.<br/><br/>
                                Whitehat Society hopes to inculcate the importance of information security into SMU students.
                            </div>
                        </div>
                        <div className="mission missionPad">
                            <div className="missionHeader">
                                PROMOTE
                            </div>
                            <div className="headerBreak"></div>
                            <div className="missionDesc">
                                With the ever-increasing need for security specialists in today's world, Whitehat Society advocates information security as a career. We share industry knowledge as well as career opportunities and pathways, which includes jobs like information security crime investigator, malware analyst, application penetration tester amongst others, to other students.
                            </div>
                        </div>
                    </div>
                    <div className="headerBreak"></div>
                    <div className="sectionHeader">
                        Our Motto
                    </div>
                    <div className="aboutMotto">
                        "Advocating Security"
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;