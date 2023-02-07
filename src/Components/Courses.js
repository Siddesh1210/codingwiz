// import Footer from "./Footer";
import CourseCard from "./CourseCard";
import Frontend_Img from '../Images/Frontend_Img.webp'
import Backend_Img from '../Images/Backend_Img.png'
import DataStructure_Img from '../Images/DataStructure_Img.webp'




// So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File

let Courses_list=[
    {
        img:{Frontend_Img},
        price:'₹ 499 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM',
        desc:'Learn complete Frontend Developement with 3+ live projects, Includes HTML5, CSS3, JavaScript, Bootstrap, Git and host your project at free!',
        oprice:'499 Only',
        sprice:'₹ 2999',
        off:'83% off',
        btn:'Buy this Course',
    },
    {
        img:{Backend_Img},
        title:'Backend Development Bootcamp',
        price:'₹ 799 Only',
        date:'Coming Soon',
        time:'7:00 PM to 8:00 PM',
        desc:'Learn Full Stack development with 3+ live projects, Learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
        oprice:'699 Only',
        sprice:'₹ 3499',
        off:'80% off',
        btn:'Coming Soon!',
    },
    {
        img:{DataStructure_Img},
        title:'Data Structures and Algorithm (Java / C++)',
        price:'₹ 999 Only',
        date:'Coming Soon',
        time:'7:00 PM to 8:00 PM',
        desc:'Learn complete Data Structure and Algorithms with 50+ live examples solving, Included all Linear and Non Linear Data Structures!',
        oprice:'999 Only',
        sprice:'₹ 5999',
        off:'80% off',
        btn:'Coming Soon!',
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
                    <CourseCard img={x.img} title={x.title} price={x.price} date={x.date} time={x.time} desc={x.desc} oprice={x.oprice} sprice={x.sprice} off={x.off} btn={x.btn}/>
                )
            })
            }

        </div>
        {/* <Footer/> */}
        </div>
    )
}

export default Courses;