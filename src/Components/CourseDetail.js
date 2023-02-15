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
        if(location.state.btn=="Buy this Course")
        {
            // alert("Proceed for payment")
            window.location.href='https://pmny.in/vrAQxGPrgZFv';
        }
        else{
            alert("Please notify me")
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
                    <p className="text-center fw-lighter money-text">7-Day Money-Back Guarantee <br></br>Life time access</p>
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

        {/* start of course circullun section */}
        {/* <div className="row course-include-card">
            <div className="col-md-8 ps-3 pe-2">
                <h4 className="fw-bolder">Course Curriculum</h4>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Accordion Item #4
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Accordion Item #5
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Accordion Item #6
                        </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Accordion Item #7
                        </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            Accordion Item #8
                        </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            Accordion Item #9
                        </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            Accordion Item #10
                        </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
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
                        <li>No programming experience needed - We'll teach you everything you need to know</li>
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