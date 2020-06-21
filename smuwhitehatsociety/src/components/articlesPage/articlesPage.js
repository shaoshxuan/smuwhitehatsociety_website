import React from 'react';
// import { Link } from 'gatsby';
import Articles from './articles/articles';
import './articlesPage.css';

class ArticlesPage extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: "All",
            marker: "",
        }
        this.indicator = this.indicator.bind(this);
    }

    componentDidMount() {
        var allFilter = document.querySelector(".articlesContent .articleFilter #All");
        this.setState(() => ({
            marker: {
                left: allFilter.offsetLeft+"px",
                width:allFilter.offsetWidth+"px",
            }
        }))
        var filterTags = document.querySelectorAll(".articlesContent .articleFilter a");
        filterTags.forEach(tag => {
            tag.addEventListener("click", (e) => {
                this.indicator(e.target);
            })
        })
    }
    componentWillUnmount() {
        var allFilter = document.querySelector(".articlesContent .articleFilter #allArticlesFilter");
        this.setState(() => ({
            marker: {
                left: allFilter.offsetLeft+"px",
                width: allFilter.offsetWidth+"px",
            }
        }))
        var filterTags = document.querySelectorAll(".articlesContent .articleFilter a");
        filterTags.forEach(tag => {
            tag.addEventListener("click", (e) => {
                this.indicator(e.target);
            })
        })
    }

    indicator = (e) => {
        this.setState(prevState => ({
            filter: e.id,
            marker: {
                left: e.offsetLeft+"px",
                width: e.offsetWidth+"px",
            }
        }))
    }

    render () {
        return (
            <div className="articles">
                <div className="articlesBanner">
                    <img src={require("../../assets/articlesHeader.jpg")} alt="bannerImg"></img>
                    <div className="articlesHeader">
                        <span style={{color: "#ffd600"}}>
                        SMU Whitehat Society's events and activities?<br/>
                        Key cyber-security happenings around the world?
                        </span>
                        <div className="headerBreak"></div>
                        Read all about them here!
                    </div>
                </div>
                <div className="landingBar"></div>
                <div className="articlesContent sectionPad">
                    <div className="articleFilter">
                        <div id="filterMarker" style={{left: this.state.marker.left, width: this.state.marker.width}}></div>
                        <a href="#" id="All">All</a>
                        <div className="filterDivider"></div>
                        <a href="#" id="ContentfulExternalArticleRepost">External News</a>
                        <div className="filterDivider"></div>
                        <a href="#" id="ContentfulWhitehatSocArticles">Our Events & Posts</a>
                    </div>
                    <div className="headerBreak"></div>
                    <div className="headerBreak"></div>
                    <div className="articlesContainer">
                        <Articles 
                            filter={this.state.filter}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesPage;