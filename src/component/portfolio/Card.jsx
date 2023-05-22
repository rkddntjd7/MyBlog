import React, { useState } from 'react';
import { FcLike, FcRight } from "react-icons/fc";
import { FaRegThumbsUp, FaAngleRight, FaTimes, } from "react-icons/fa";

const Card = ({img, title, category, totalLike}) => {
    const [modal, setModal] = useState(false);

    return (
        <>
        <div className="box btn-shadow card">
            <div className="img">
                <img src={img} alt={img} />
            </div>
            <div className="category d-flex">
                <span>
                    {(category)}
                </span>
                <label>
                    <FcLike />
                    {totalLike}
                </label>
            </div>
            <div className="title">
                <h2>{title}</h2>
                <a href="#popup" className='arrow'>
                    <FcRight />
                </a>
            </div>
        </div>
        {modal && (
        <div className="modal">
            <div className="modal-content d-flex">
                <div className="modal-img left">
                    <img src={img} alt={img} />
                </div>
                <div className="modal-text right">
                    <span>Feadtures - Design</span>
                    <h1>{title}</h1>
                    <p>대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말</p>
                    <p>대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말</p>
                    <p>대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말 대충 아무말</p>
                    <button className="btn-shadow">
                        LIKE THIS <FaRegThumbsUp />
                    </button>
                    <button className="btn-shadow">
                        VIEW PROJECT <FaAngleRight />
                    </button>
                    <button className="btn-shadow">
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    )}
        </>
    );
};

export default Card;