import React, { useRef } from 'react';
//import {useDispatch} from 'react-redux';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
    const form = useRef();
    // const dispatch = useDispatch();
    const myid = {
        SERVICE_ID : "rkddntjd7Gmail",
        TEMPLATE_ID : "template_q3l6he9",
        USER_ID : "A5rz73o9qScSwuXlO"
    }
    const closeEmail = () => {
        // dispatch({type : "CLOSE_EMAIL"});
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
        .then((rs) => {
            console.log(rs.text);
            alert("전송성공");
            closeEmail();
        },
        (error) => {
            console.log(error.text);
            alert("전송실패");
        });
    };

    return (
        <div>
            <section className="Contact" id="contact">
                <div className="container">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>CONTACT With me</h1>
                    </div>

                    <div className="content d-flex">
                        <div className="left">
                            <div className="box btn-shadow">
                                <div className="img">
                                    <img src="images/together.jpeg" alt="함께" />
                                </div>
                                <div className="details">
                                    <h1>저에게 연락주세요!</h1>
                                    <p>저는 말이지요~</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box btn-shadow">
                                <form ref={form} onSubmit={sendEmail} className='emailform'>
                                    <div className="f-flex">
                                    <div className="col-50">

                                    </div>
                                    <div>
                                        <label>보내시는 분 성함</label>
                                        <input type="text" name='user_name' placeholder='이름' />
                                    </div>

                                    <div className="col-50">
                                    <label>보내시는 분 이메일</label>
                                        <input type="text" name='user_email' placeholder='이메일' />
                                    </div>
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder='하실 말씀'></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit'>이메일 전송</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;