import Footer from "./Footer";
import SyllabusAccordion from "./SyllabusAccordion";
import { useLocation } from "react-router-dom";

function CourseDetail()
{
    const location=useLocation();
    // console.log(location);
    // console.log(location.state.title);
    function PaymentHandler()
    {
        if(location.state.title=="Frontend Development Bootcamp")
        {
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/2I5lADweAfoz';
        }
        else if(location.state.title=="Backend Development Bootcamp")
        {
            // alert("Proceed for Backend payment");
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/Jry0aLXWmAIJ';

        }
        else if(location.state.title=="App Development with Flutter")
        {
            // alert("Proceed for App payment");
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/Drc56zdwD2Y1';

        }
        else if(location.state.title=="Data Structures and Algorithm in Java")
        {
            // alert("Proceed for Java payment");
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/trXJnrcwYrqI';

        }
        else if(location.state.title=="Data Structures and Algorithm in C++")
        {
            // alert("Proceed for C++ payment");
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/pIkjBcnDFPsE';

        }
        else if(location.state.title=="Machine Learning with Python")
        {
            // alert("Proceed for ML payment");
            alert("Note :\n\n1.Once your payment is successful , you will receive course confirmation mail within 24 hours. \n\n2.Also note you will be paying to Siddesh Laxmichandra Jaiswal , Founder of Codingwiz.");
            window.location.href='https://pmny.in/1rE0mLRWIArS';
        }
    }
    return(
        <div className="container-fluid">
            <div className="relative">
            <div className="row p-5 text-white course-detail-main-row">
                <div className="col-sm-7">
                    <h3>{location.state.title}</h3>
                    <p className="course-detail-desc">{location.state.desc}</p>
                    <p className="star">4.5 <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-fill star"></i> <i className="bi bi-star-half star"></i></p>
                </div>
            </div>
            <div className="row card-detail-row">
                <div className='col-sm-3 course-card course-card2 absolute bg-white'>
                    <div className='parent-img'>
                    <img src={location.state.img} className='course-img'></img>
                    </div>
                    <h4>{location.state.title}</h4>
                    <p><span className="text-499">{location.state.oprice}</span> <del>{location.state.sprice}</del> {location.state.off}</p>
                    
                    <button className='course-btn' onClick={PaymentHandler}>{location.state.btn}</button>
                    <p className="text-center fw-lighter money-text">Guaranteed free Internship <br></br>Life time access</p>
                </div>
            </div>
            </div>

        {/* start of course include section */}

            <div className="row course-include-card">
                <div className="col-md-6 ">
                    <h4 className="fw-bolder">This Course Includes</h4>
                    <div className="row justify-content-between">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-tv"></i> Daily Live Interactive Classes</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-cloud-download"></i> All classes are downloadable</p>
                        </div>
                    </div>

                    <div className="row justify-content-between ">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-phone"></i> Access from any device</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-credit-card-2-front"></i> Weekly Live Project</p>
                        </div>
                    </div>

                    <div className="row justify-content-between ">
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-trophy"></i> Certificate of Completion</p>
                        </div>
                        <div className="col-md-6 py-2">
                            <p><i className="bi bi-laptop"></i> Live Doubt Solving</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* End of course include section */}

        <div className="row course-heading">
            <div className="col-md-8 ps-3 pe-2">
                <h4 className="fw-bolder">Course Curriculum</h4>
            </div>
        </div>
        <SyllabusAccordion syllabus={location.state.syllabus} />

        {/* end of circullum section */}
        
        {/* start of requirement section */}
            <div className="row course-include-card2">
                <div className="col-md-8 ps-3 pe-2">
                    <h4 className="fw-bolder">Requirements</h4>
                    <ul className="course-detail-list">
                        <li>{location.state.require}</li>
                        <li>A computer with access to the internet</li>
                        <li>No paid software or any other things are required</li>
                        <li>We'll walk you through, step-by-step how to get all the software installed and set up</li>
                        <li>And lastly your support!</li>
                    </ul>
                </div>
            </div>
        {/* end of requirement section */}

            <Footer/>
        </div>
    )
}

export default CourseDetail;