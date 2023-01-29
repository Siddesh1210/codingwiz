import Footer from "./Footer";

function Courses()
{
    return(
        <div className="container-fluid pt-3">
            <div className="row justify-content-evenly">
            <div className='col-md-12 text-center'>
                <h2 className="fw-bold fs-1">Popular Courses</h2>
                <p className="fs-5 fw-lighter mb-1">our key courses</p>
            </div>
        </div>
        <div className="row justify-content-evenly mb-4">
            <div className='col-md-3 course-card'>
                <div className='parent-img'>
                <img src="https://www.thecela.com/uploads/job/G3OlI4l8CFj1QYUIMsDc6yeyoYhDWowfNWLAZ8fg.jpeg" className='course-img'></img>
                </div>
                <h4>Frontend Development Bootcamp</h4>
                <p>₹ 499 Only</p>
                <p>Start from March onwards</p>
                <p>7:00 PM to 8:00 PM</p>
                <button className='course-btn'>Check Details!</button>
            </div>

            <div className='col-md-3 course-card'>
            <div className='parent-img'>
                <img src="https://www.iqmotion.ai/wp-content/uploads/2021/08/development-1.png" className='course-img '></img>
            </div>
                <h4>Backend Development Bootcamp (MERN)</h4>
                <p>₹ 799 Only</p>
                <p>Start from March onwards</p>
                <p>7:00 PM to 8:30 PM</p>
                <button className='course-btn'>Check Details!</button>
            </div>

            <div className='col-md-3 course-card'>
            <div className='parent-img'>
                <img src="https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fdsa2.jpg&w=1080&q=75" className='course-img'></img>
            </div>
                <h4>Data Structures and Algorithm (Java / C++)</h4>
                <p>₹ 999 Only</p>
                <p>Start from March onwards</p>
                <p>7:00 PM to 8:30 PM</p>
                <button className='course-btn'>Check Details!</button>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}

export default Courses;