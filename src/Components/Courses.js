import Footer from "./Footer";
import CourseCard from "./CourseCard";

// So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File

let Courses_list=[
    {
        img:'https://www.shutterstock.com/image-vector/this-colourful-illustration-shows-process-260nw-1788713501.jpg',
        title:'Frontend Development Bootcamp',
        price:'₹ 499 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM'
    },
    {
        img:'https://www.iqmotion.ai/wp-content/uploads/2021/08/development-1.png',
        title:'Backend Development Bootcamp',
        price:'₹ 799 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM'
    },
    {
        img:'https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fdsa2.jpg&w=1080&q=75',
        title:'Data Structures and Algorithm (Java / C++)',
        price:'₹ 999 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM'
    }

    // So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File
]

function Courses()
{
    return(
        <div className="container-fluid pt-3">
            <div className="row justify-content-evenly">
            <div className='col-md-12 text-center'>
                <h2 className="fw-bold fs-1">Popular Courses</h2>
                <p className="fs-5 fw-lighter mb-1">Our key courses</p>
            </div>
        </div>

        <div className="row justify-content-evenly mb-4">
            {
            Courses_list.map((x)=>
            {
                return(
                    <CourseCard img={x.img} title={x.title} price={x.price} date={x.date} time={x.time}/>
                )
            })
            }

        </div>
        <Footer/>
        </div>
    )
}

export default Courses;