// import Footer from "./Footer";
import CourseCard from "./CourseCard";
import Frontend_Img from '../Images/Frontend_Img.webp'
import Backend_Img from '../Images/Backend_Img.png'
import DataStructure_Img from '../Images/DataStructure_Img.webp'
import SyllabusAccordion from "./SyllabusAccordion";




// So in future if we need to add any new card we can just pass JSON Card data over here in Courses.js File

let Courses_list=[
    {
        img:'https://www.shutterstock.com/image-vector/this-colourful-illustration-shows-process-260nw-1788713501.jpg',
        title:'Frontend Development Bootcamp',
        price:'₹ 499 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM',
        desc:'Learn complete Frontend Developement with 3+ live projects, Includes HTML5, CSS3, JavaScript, Bootstrap, Git and host your project at free!',
        oprice:'499 Only',
        sprice:'₹ 2999',
        off:'83% off',
        btn:'Buy this Course',
        syllabus:[
            {
                title:"Introduction to course",
                description:"What are Different Stacks for WebD & Whats special about MERN above them Brief on Components of MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB) Explaining the Structure of the Course.Clarifying the Difference between Full Stack Development & DevOps.",
                id:"headingOne",
                datatarget:"#collapseOne",
                arialcontrols:"collapseOne"
            },
            {
                title:"Introduction to ReactJS",
                description:"What are Different Stacks for WebD & Whats special about MERN above them Brief on Components of MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB) Explaining the Structure of the Course.Clarifying the Difference between Full Stack Development & DevOps.",
                id:"headingTwo",
                datatarget:"#collapseTwo",
                arialcontrols:"collapseTwo"
            },
            {
                title:"Introduction to ExpressJS",
                description:"What are Different Stacks for WebD & Whats special about MERN above them Brief on Components of MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB) Explaining the Structure of the Course.Clarifying the Difference between Full Stack Development & DevOps.",
                id:"headingThree",
                datatarget:"#collapseThree",
                arialcontrols:"collapseThree"
            }
        ]
    },
    {
        img:'https://www.iqmotion.ai/wp-content/uploads/2021/08/development-1.png',
        title:'Backend Development Bootcamp',
        price:'₹ 749 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:30 PM',
        desc:'Learn Full Stack development with 3+ live projects, Learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
        oprice:'749 Only',
        sprice:'₹ 4999',
        off:'85% off',
        btn:'Coming Soon!',
    },
    {
        img:'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg',
        title:'Android App Development with Java',
        price:'₹ 749 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:30 PM',
        desc:'Android App development | Boost mobile app development skills with android studio using Kotlin, Java android development',
        oprice:'749 Only',
        sprice:'₹ 4999',
        off:'85% off',
        btn:'Coming Soon!',
    },
    {
        img:'https://media.licdn.com/dms/image/C4E0DAQGDRxCiTmA53A/learning-public-crop_288_512/0/1568669909265?e=2147483647&v=beta&t=QAxV_yWsi3WYtzsrZEJR8xk4Ij2LZDPsbUHpX0-00gc',
        title:'Data Structures and Algorithm in Java',
        price:'₹ 999 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 9:00 PM',
        desc:'Learn complete Data Structure and Algorithms with 50+ live examples solving, Included all Linear and Non Linear Data Structures!',
        oprice:'999 Only',
        sprice:'₹ 5999',
        off:'80% off',
        btn:'Coming Soon!',
    },
    {
        img:'https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fdsa2.jpg&w=1080&q=75',
        title:'Data Structures and Algorithm in C++',
        price:'₹ 999 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 9:00 PM',
        desc:'Learn complete Data Structure and Algorithms with 50+ live examples solving, Included all Linear and Non Linear Data Structures!',
        oprice:'999 Only',
        sprice:'₹ 5999',
        off:'80% off',
        btn:'Coming Soon!',
    },
    {
        img:'https://www.oho.co.uk/uploads/guide-to-machine-learning-and-ai.jpg',
        title:'Machine Learning with Python',
        price:'₹ 749 Only',
        date:'Start from March onwards',
        time:'7:00 PM to 8:00 PM',
        desc:'Deep dive into Machine Learning with Python! By learning about library like Numpy, Pandas, Matplotlib and by building 3+ real-time projects!',
        oprice:'749 Only',
        sprice:'₹ 4999',
        off:'85% off',
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
                    <div>
                    <CourseCard img={x.img} title={x.title} price={x.price} date={x.date} time={x.time} desc={x.desc} oprice={x.oprice} sprice={x.sprice} off={x.off} btn={x.btn}/>
                    {/* <SyllabusAccordion title={x.syllabus}/> */}
                    
                    </div>
                )
            })
            }

        </div>
        {/* <Footer/> */}
        </div>
    )
}

export default Courses;