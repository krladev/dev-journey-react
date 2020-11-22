import React from 'react'
import Moment from 'react-moment';
import { TechIcon } from './TechIcon';

export const TechCard = ({
    infoDescription,
    lastUpdated,
    stars,
    tags,
    techIcon,
    techTitle
}) => {
         
    return (        
        
        <section className="tech-card-odd">
            

            <div className="tech-card-wrapper">
                <div className="logo">
                    <TechIcon icon={techIcon} />
                </div>
                <div className="info">
                    <div className="info-title">
                        <h2>{techTitle}</h2>
                        <div className="tags">
                        {
                            tags.map((tag, index) => {
                                return <span key={index}>{ tag }</span>;
                            })
                        }
                        </div>
                    </div>
                    <div className="info-description">
                    <h3>{ infoDescription.title }</h3>
                        <p>{ infoDescription.description }</p>
                    </div>
                </div>
                <div className="rating">
                    <div className="rating-stars">
                        {
                            [1, 1, 1, 1, 1].map((number, i) => {
                                if(i + 1 <= stars){
                                    return <i key={i} className="fas fa-star"></i>;
                                }
                                else if(i + 1 > stars && i < stars){
                                    return <i key={i} className="fas fa-star-half-alt"></i>;
                                }
                                else{
                                    return <i key={i} className="far fa-star"></i>;
                                }
                            })
                        }
                        {/* <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i> */}
                    </div>
                    <div className="rating-stars-small">
                        { stars } <i className="fas fa-star"></i>
                    </div>
                    <div className="rating-last">
                        <div className="lastUpdatedLabel">Last updated</div>
                        <Moment format="DD/MM/YY">
                            { lastUpdated }
                        </Moment>                        
                    </div>
                </div>
            </div>
        </section>
    )
}
