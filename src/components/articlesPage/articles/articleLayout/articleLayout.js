import React from 'react';
import { Link } from 'gatsby'
import './articleLayout.css';

const ArticleLayout = (props) => {
    return (
        <div className="articleContainer">
            <Link to={`/articles/${props.slug}`}>
                <div className="articleLayout">
                    <div>
                        <div className="articleType">
                            {props.type}
                        </div>
                        <div style={{padding: "0.3rem 0"}}></div>
                        <div className="articleTitle">
                            {props.title}
                        </div>
                    </div>
                    <div>
                        <div className="author">
                            <span style={{color: "#f3f1f1"}}>Author:</span><br/>{props.author}
                        </div>
                        <div className="date">
                        <span style={{color: "#f3f1f1"}}>Date Posted:</span><br/>{props.datePosted}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default ArticleLayout;