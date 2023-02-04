import HeroImg3 from '../Images/hero_img3.png'
import HeroGif2 from '../Images/hero_gif_vikrant.gif'
import card1 from '../Images/card1.png';
import card2 from '../Images/card2.png';
import card3 from '../Images/card3.png';
import card4 from '../Images/card4.png';
import card5 from '../Images/card5.png';
import card6 from '../Images/card6.png';
import Courses from './Courses';
import {useNavigate} from 'react-router-dom';


function Hero()
{
    const navigate=useNavigate();
    function CoursesHandler()
    {
        navigate('/courses');
    }
    return(
        <div className="container-fluid">
        <div className="row justify-content-evenly align-items-center hero-row flex-wrap-reverse">
            <div className="col-md-5 px-4 py-2">
                <h1>Start your Dream Career with Free to Code</h1>
                <p>Be job ready by learning top & trending technologies used by Big MNCs at just starting price from ₹499!</p>
                <button className="hero-btn" onClick={CoursesHandler}>Explore Courses</button>
                <a href="tel:9623235838" className="callTutors"><button className="hero-btn2">Call Tutors</button></a>

            </div>
            <div className="col-md-5">
                <img src={HeroGif2} className="img-fluid"></img>
            </div>
        </div>

        <div className="row justify-content-evenly mt-4 mb-3 text-center">
            <div className="col-md-12">
            <h2 className="fw-bold fs-1">Why us?</h2>
            <p className="fs-5 fw-lighter mb-0">Our key offering</p>
            </div>
        </div>

        <div className="row justify-content-evenly mx-1">
            <div className="col-md-3 yus-card m-2">
                <img src={card1} className='img-fluid'></img>
            </div>

            <div className="col-md-3 yus-card m-2">
            <img src={card2} className='img-fluid'></img>
            </div>

            <div className="col-md-3 yus-card m-2">
            <img src={card3} className='img-fluid'></img>
            </div>
        </div>

        <div className="row justify-content-evenly mx-1">
            <div className="col-md-3 yus-card m-2">
                <img src={card4} className='img-fluid'></img>
            </div>

            <div className="col-md-3 yus-card m-2">
            <img src={card5} className='img-fluid'></img>
            </div>

            <div className="col-md-3 yus-card m-2">
            <img src={card6} className='img-fluid'></img>
            </div>
        </div>

        {/* testimonial start */}
         
        {/* testimonial end */}
        
        <Courses/>
        {/* end of container-fluid */}
        </div>
    )
}

export default Hero;