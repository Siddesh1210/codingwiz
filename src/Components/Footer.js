import {useNavigate} from 'react-router-dom';

function Footer()
{
    const navigate=useNavigate();
    function PrivacyHandler()
    {
        navigate('/privacy-policy');
    }
    function ContactHandler()
    {
        navigate('/contact');
    }
    function TechnologyHandler()
    {
        navigate('/technologies');
    }
    function CourseHandler()
    {
        navigate('/courses');
    }
    function AboutHandler()
    {
        navigate('/about-us');
    }
    return(
        <div className="row justify-content-evenly footer pt-5 pb-2">
            <div className="col-md-2">
                <h5>Courses</h5>
                <p onClick={CourseHandler}>Frontend <br></br>Backend <br></br>App Development<br></br>Machine Learning</p>
            </div>

            <div className="col-md-2">
                <h5>Technologies</h5>
                <p onClick={TechnologyHandler}>Python<br></br>JavaScript<br></br>ExpressJS<br></br>Java / C++</p>
            </div>

            <div className="col-md-2">
            <h5>Social Media</h5>
                <p className='social-media'><a href="https://www.linkedin.com/company/codingwiz/" target="_blank">LinkedIn</a><br></br><a href="https://www.facebook.com/CodingWiz2023" target="_blank">Facebook</a><br></br><a href="https://instagram.com/thecoding_wiz?igshid=ZDdkNTZiNTM=" target="_blank">Instagram</a><br></br><a href="https://wa.me/9623235838" target="_blank">Whatsapp</a></p>
            </div>

            <div className="col-md-2">
            <h5>Legal</h5>
                <p><span onClick={PrivacyHandler}>Privacy Policy<br></br>Terms & Conditions<br></br></span><span onClick={AboutHandler}>About Us</span><br></br><span onClick={ContactHandler}>Contact</span></p>
            </div>

            <hr></hr>
            <div className="col-md-10 text-center">
                <p>Copyright &#169; codingwiz 2023.All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer;