import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';

import './theExco.css';
import ExcoMember from './excoMember/excoMember';

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