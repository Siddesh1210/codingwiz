import RitikImg from '../Images/ritik_img.jpeg'
import SakshiImg from '../Images/sakshi_img.jpeg'
import RinkalImg from '../Images/rinkal_img.jpeg'
import HaamidImg from '../Images/haamid_img.jpeg'
import AmipratImg from '../Images/amiprat_img.jpeg'
import SarveshImg from '../Images/sarvesh_img.jpeg'


function Testimonial()
{
    
    return(
        <div className="container-fluid">
            <div className='row justify-content-center py-2 text-center'>
                <div className='col-md-10'>
                <h2 className="fw-bold fs-1">Why learners choose  us</h2>
                <p className="fs-5 fw-lighter mb-0">An experience learners love to talk about</p>
                </div>
            </div>

            <div className="row justify-content-evenly">
            <div className="col-md-3 mx-1">
                <div className="col-12 p-2 my-2 test-card" >
                    <p><i class="bi bi-quote"></i><mark>A lot of advanced web dev topics taught at codingwiz </mark>taught by sir gave me an edge over my peers, and I ultimately absorbed more here than I ever did anywhere else.The course is very well organized.And now as a developer, I feel much confident.</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={RitikImg} className="student-img abhisek-img"/>
                        <p className="studentname-para"><b>Ritik Maurya</b><br/><span>Student</span></p>
                    </div>
                    <div>
                    <h2 className="insta-testimonial-icon"><a href="https://instagram.com/ritikkkk.0f?igshid=Zjc2ZTc4Nzk="><i className="bi bi-instagram"></i></a></h2>
                    </div>
                    </div>
                </div>

                <div className="col-12 p-2 my-2 test-card">
                    <p><i class="bi bi-quote"></i><mark>Best course to learn coding </mark>And very helpful course with real and practical examples.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={RinkalImg} className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Rinkal Patil</b><br/><span>Student</span></p>
                        </div>
                        <div>
                        <h2 className="insta-testimonial-icon"><a href="https://instagram.com/rinkal_patil_?igshid=ZDdkNTZiNTM="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-2 my-2 test-card">
                    <p><i class="bi bi-quote"></i>Very well explained in short span of time.<mark> Love the course.</mark></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={AmipratImg} className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Amiprat Meshram</b><br/><span>Student</span></p>
                        </div>
                        <div>
                        <h2 className="insta-testimonial-icon"><a href="https://instagram.com/amiprat_m?igshid=NTA5ZTk1NTc="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mx-1">
                <div className="col-12 p-2  my-2 test-card">
                    <p><i class="bi bi-quote"></i><mark>It was great learnig with codingwiz. </mark>It helped in gaining enough experience to get my internship</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={SarveshImg} className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Sarvesh Tiwari</b><br/><span>Student</span></p>
                        </div>
                        <div>
                        <h2 className="insta-testimonial-icon"><a href="https://instagram.com/sarveshrai8?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-2 my-2 test-card">
                    <p><i class="bi bi-quote"></i><mark>It's an amazing interactive course. It always feel great learning in this course.</mark> Sir is great I have to tell this, he is very helpful, he is always ready to solve our any kind of doubt and that has helped me a lot to learn and improve in myself, I just look forward to myself of becoming a great frontend developer so that i can make him proud. </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={HaamidImg} className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Haamid Raza</b><br/><span>Student</span></p>
                        </div>
                        <div>
                        <h2 className="insta-testimonial-icon"><a href="https://instagram.com/the_hrk_03?igshid=NTA5ZTk1NTc="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3 mx-1">
                <div className="col-12 p-2  my-2 test-card" >
                    <p><i class="bi bi-quote"></i>The course material was well-organized and easy to follow, and the instructor was knowledgeable and engaging. The online format allowed for flexibility in my schedule and provided resources, such as recorded lectures and interactive discussions, that enhanced my learning experience.<mark> Overall, I highly recommend this course for anyone looking to further their knowledge and skills in a convenient and effective manner. </mark> </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?b=1&s=170667a&w=0&k=20&c=lQxEqo4oY2z9-yUVMFdsJPYpMNRgOhi8-sFCz8Wt-cg=" className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Abhishek Sharma</b><br/><span>Student</span></p>
                        </div>
                        <div>
                            <h2 className="insta-testimonial-icon"><a href="https://instagram.com/_abhishekshxrma?igshid=ZDdkNTZiNTM="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-2  my-2 test-card" >
                    <p>All concepts of HTML, CSS and JavaScript is explained in easy way
                    and <mark>real life related projects help us a lot in experimenting. </mark></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={SakshiImg} className="student-img abhisek-img"/>
                            <p className="studentname-para"><b>Sakshi Choudhary</b><br/><span>Student</span></p>
                        </div>
                        <div>
                        <h2 className="insta-testimonial-icon"><a href="https://instagram.com/_shambhavi_sakshi?igshid=ZDdkNTZiNTM="><i className="bi bi-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Testimonial;