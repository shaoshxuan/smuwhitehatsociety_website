import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';

import './theExco.css';
import ExcoMember from './excoMember/excoMember.js';

const TheExco = () => {
    const excoMemberData = useStaticQuery(graphql`
        query {
            contentfulAcademicYearAy {
                academicYear
            }
            allContentfulExcoMembers (
                sort: {
                    fields: index,
                    order: ASC
                }) {
                edges {
                    node {
                        index
                        name
                        role
                        displayPicture {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div id="exco">
            <div className="theExco sectionPad">
                <div className="sectionHeader">
                        The Executive Committee<br/>
                        <span className="academicYear">({excoMemberData.contentfulAcademicYearAy.academicYear})</span>
                </div>
                <div className="headerBreak"></div>
                <div className="excoContainer">
                    <div style={{display:"none"}}>
                        I wanted to be in the Exexcutive Committee... But these fools did not let me in.
                        I wanted to deface the website but that would make me the bad guy so I shall not do such a thing...
                        Instead, here is my Twitter profile [https://twitter.com/HackerJamesBest]. Hit me up and let's gossip there!!
                        We shall not be restricted by the power of status!
                    </div>
                    {excoMemberData.allContentfulExcoMembers.edges.map((member) => {
                        return (
                            <ExcoMember
                                profilePic= {member.node.displayPicture.file.url}
                                name= {member.node.name}
                                role= {member.node.role}
                            >
                            </ExcoMember>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TheExco;