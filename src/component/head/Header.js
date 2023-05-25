import React, {useState} from 'react'; //usestate 가져옴
import "./header.css";
import logo from "../../img/logo.png";
import {RxHamburgerMenu, RxCross1 } from 'react-icons/rx';


const Header = () => {

    const [mobile, setMobile] = useState(false);
    return (
        <header className='header'>
            <div className="container d-flex">
                <div className="logo">
                    <img src={logo} alt="포트폴리오" />
                </div>
                <div className="navlink">
                    <ul className={ mobile ? "nav-link-mobile" : "link f-flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href="#features">features</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#resume">resume</a></li>
                        <li><a href="#group">study group</a></li>
                        <li><a href="#contact">contact me</a></li>
                        <li><button className='home-btn'>PDF DOWN</button></li>
                    </ul>
                </div>
            
            <button className='toggle' onClick={()=> setMobile(!mobile)}>
                {mobile ? <RxCross1 className='close home-btn'/> : <RxHamburgerMenu className='open'/>}
            </button>

            </div>
        </header>
    );
};

export default Header;