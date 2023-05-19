import React from 'react';
import "./features.css";
import Card from './Card';

const Features = () => {
    return (
       <>
            <section className='features top' id='features'>
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do!!</h1>
                    </div>
                </div>
                <div className="container grid">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
       </>
    );
};

export default Features;