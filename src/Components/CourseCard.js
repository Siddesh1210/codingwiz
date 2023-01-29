// So in future if we need to add any new card we can just pass JSON Card data over in Courses.js File

import CourseDetail from "./CourseDetail";
import { Link } from "react-router-dom";

function CourseCard(props)
{
    function CardHandler()
    {
        // alert(props.title)
        <CourseDetail/>

    }
    return(
            <div className='col-md-3 course-card'>
                <div className='parent-img'>
                <img src={props.img} className='course-img'></img>
                </div>
                <h4>{props.title}</h4>
                <p>{props.price}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <button className='course-btn' onClick={CardHandler}>Check Details!</button>
            </div>
    )
}

export default CourseCard;