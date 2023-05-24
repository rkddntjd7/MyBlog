import React, {useState, useEffect} from 'react';
import "./group.css";
import Slide from './Slide';
import Groupdata from "../../data/api4";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


const Group = () => {
    const [date, setDate] = useState(Groupdata);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = Groupdata.length -1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, Groupdata]); 

    useEffect(()=> {
        let slider = setInterval(() => {
           setIndex(index + 1) 
        }, 3000)
        return ()=>clearInterval(slider)
    }, [index]);

    return (
        <>
            <section className='group top' id='group'>
                <div className="container">
                    <div className="heading text-center">
                        <h4>Our Study Group</h4>
                        <h1>What We Do!!</h1>
                    </div>

                    <div className="slide">
                        {
                            Groupdata.map((dt, valueIndex) => (
                                <Slide key={dt.id} {...dt} valueIndex={valueIndex} index={index}/>
                            ))
                        }


                        <div className="slide-button">
                            <button className="btn-shadow prev-btn" onClick={()=>setIndex(index-1)}>
                                <RiArrowLeftSLine />
                            </button>
                            <button className="btn-shadow next-btn" onClick={()=>setIndex(index+1)}>
                                <RiArrowRightSLine />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Group;