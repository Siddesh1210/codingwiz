import Footer from "./Footer";
import {useRef} from 'react';
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Contact()
{
    const nameInput=useRef(null);
    const emailInput=useRef(null);
    const phone_no=useRef(null);
    const query_desc=useRef(null);
    function ContactHandler()
    {
        const username=nameInput.current.value;
        const useremail=emailInput.current.value;
        const user_phoneno=phone_no.current.value;
        const userquery=query_desc.current.value;

        let user={
            name:username,
            email:useremail,
            phone_number:user_phoneno,
            query:userquery,
        }

        if(username.length > 3 && useremail.length > 3 && user_phoneno > 1111111111)
            {
                fetch('https://feb-demo-night-default-rtdb.firebaseio.com/user.json',{
                method:'post',
                body:JSON.stringify(user)
                }).then(()=>
                {
                    // alert("Data added successfully")
                    toast.dark("Query Raised Successfully",
                    {
                        position:"top-center"
                    })
                    nameInput.current.value="";
                    emailInput.current.value="";
                    phone_no.current.value="";
                    query_desc.current.value="";
                })
            }
        else{
            toast.error("Please fill in all detail",
                    {
                        position:"top-center"
                    })
        }
    }
    return(
        <div className="container-fluid">
        <div className="row justify-content-evenly contact-row pt-4 pb-3 px-3 text-white align-items-center">
            <div className="col-md-6">
                <h4>Contact CodingWiz</h4>
                <p>We're glad you found us, and we can't wait to help you build your coding career! Have any questions you can fill the form and we will contact you or call us on 9623235838</p>
                <div className="row justify-content-between contact-hide-div">
                <div className="col-5 contact-box px-2 pt-2 m-2">
                        <p className="fw-lighter"><i className="bi bi-geo-alt"></i>  Near Manickpur , Vasai West   Mumbai - 401202</p>
                    </div>

                    <div className="col-5 contact-box px-2 pt-2 m-2">
                        <p><i className="bi bi-phone"></i> 9623235838 <br></br> <i className="bi bi-phone"></i> 9084321252</p>
                    </div>

                    <div className="col-5 contact-box px-2 pt-2 m-2">
                        <p><i className="bi bi-envelope"></i> info@codingwiz.in</p>
                    </div>

                    <div className="col-5 contact-box px-2 pt-2 m-2">
                        <p><i className="bi bi-whatsapp"></i> 9623235838</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <form className="text-dark contact-form bg-white">
                    <h5 className="fw-light">Need Help!!!</h5>

                    <div className="form-floating mb-3">
                    <input type="text" className="form-control shadow-none" id="floatingInput" placeholder="Full Name" ref={nameInput}/>
                    <label for="floatingInput">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="email" className="form-control shadow-none" id="floatingPassword" placeholder="Email Address"  ref={emailInput} />
                    <label for="floatingPassword">Email Address</label>
                    </div>

                    <div className="form-floating mb-3">
                    <input type="tel" className="form-control shadow-none" id="floatingPassword" placeholder="Phone Number" maxLength={10} ref={phone_no}/>
                    <label for="floatingPassword">Phone Number</label>
                    </div>
    
                    <div className="mb-3">
                    <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="2" placeholder="Write your comment" ref={query_desc}></textarea>
                    </div>
                    <button className="contact-btn" onClick={ContactHandler} type="button">Send Message</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
        <div className="row justify-content-evenly contact-row text-white px-4 pb-2 contact-hide-div2">
            <div className="col-md-2 contact-box px-1 pt-2 m-2">
                <p className="fw-lighter"><i className="bi bi-geo-alt"></i>  Near Manickpur , Vasai West   Mumbai - 401202</p>
            </div>

            <div className="col-md-2 contact-box px-2 pt-2 m-2">
                <p><i className="bi bi-phone"></i> 9623235838 <br></br> <i className="bi bi-phone"></i> 9084321252</p>
            </div>

            <div className="col-md-2 contact-box px-2 pt-2 m-2">
                <p><i className="bi bi-envelope"></i> info@codingwiz.in</p>
            </div>

            <div className="col-md-2 contact-box px-2 pt-2 m-2">
                <p><i className="bi bi-whatsapp"></i> 9623235838</p>
            </div>
        </div>

        <div className="row justify-content-center p-4">
            <div className="col-md-11 text-center">
            <h3 className="pb-3 fw-bolder">Find us on Map</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15055.456488792966!2d72.81879820791272!3d19.37503529067025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aeeb8840c76b%3A0x9280c5670f13f217!2sManickpur%2C%20Vasai%20West%2C%20Vasai-Virar%2C%20Maharashtra%20401202!5e0!3m2!1sen!2sin!4v1674978808414!5m2!1sen!2sin" className="map"></iframe>
            </div>
        </div>

        <Footer/>
        </div>
    )
}

export default Contact;