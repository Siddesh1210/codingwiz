// So in future if we need to add any new card we can just pass JSON Card data over in Courses.js File

import {useNavigate} from 'react-router-dom';
import React from "react";


function CourseCard(props)
{
    const navigate=useNavigate();
    function CardHandler()
    {
        navigate('/course-detail',{
            state:{
                title:props.title,
                desc:props.desc,
                oprice:props.oprice,
                sprice:props.sprice,
                off:props.off,
                btn:props.btn,
                img:props.img,
                syllabus: props.syllabus,
                require:props.require,
                coursedur:props.coursedur,
                linkin:props.linkin,
            }
        });
    };
    return(
            <div className='col-md-3 course-card'>
                <div className='parent-img'>
                <img src={props.img} className='course-img'></img>
                </div>
                <h4>{props.title}</h4>
                <p>{props.price}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                {/* <button>Best Seller</button> */}
                <button className='course-btn' onClick={CardHandler}>Check Details!</button>
            </div>
    )
}

export default CourseCard;