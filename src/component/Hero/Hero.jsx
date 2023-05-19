import React from 'react';
import "./hero.css";
import HeroImg from "../../img/me.png";
import { Typewriter } from 'react-simple-typewriter';
import { GrInstagram } from "react-icons/gr";
import { SiVelog, SiSpring, SiMysql  } from "react-icons/si"
import { BsGithub } from "react-icons/bs";
import { FaJava } from "react-icons/fa";


const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container f-flex top">
                    <div className="left top">
                        <h3>welcome to my world</h3>
                        <h1>
                            Hi, I'm <span>Kang Woo Sung</span>
                        </h1>
                        <h2>
                            a 
                            <span>
                                <Typewriter words={[" Newbie Developer.", " Professional Coder."]}
                                                    loop cursor cursorStyle="|"
                                                    delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                                />
                            </span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>

                        <div className="hero-btn d-flex">
                            <div className="col">
                                <h4>View My SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow"><GrInstagram className='icon'/></button>
                                    <button className="btn-shadow"><BsGithub className='icon'/></button>
                                    <button className="btn-shadow"><SiVelog className='icon'/></button>
                                </div>
                            </div>
                            <div className="col">
                            <h4>BEST MY SKILL</h4>
                                <div className="button">
                                    <button className="btn-shadow"><FaJava className='icon'/></button>
                                    <button className="btn-shadow"><SiSpring className='icon'/></button>
                                    <button className="btn-shadow"><SiMysql className='icon'/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-img">
                            <img src={HeroImg} alt="me" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;