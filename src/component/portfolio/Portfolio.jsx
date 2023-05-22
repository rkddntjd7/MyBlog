import React from 'react';
import "./portfolio.css";
import data from '../../data/api2';
import Card from '../portfolio/Card';
const Portfolio = () => {
    return (
        <>
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>Visit my Portfolio and keep yout feedback</h4>
                        <h1>My portfolio</h1>
                    </div>
                    <div className="content grid">
                        {
                            data.map((val, index) => {
                                return <Card key={index}
                                img={val.img}
                                category={val.category}
                                totalLike={val.totalLike}
                                title={val.title}
                            />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;