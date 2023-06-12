// import HeroImg3 from '../Images/hero_img3.png'
// import HeroGif2 from '../Images/hero_gif_vikrant.gif'
// import HeroGif3 from '../Images/rotating_icon.gif';
import HeroGif4 from '../Images/newrotating_icons.gif';
import card1 from '../Images/card1.png';
import card2 from '../Images/card2.png';
import card3 from '../Images/card3.png';
import card4 from '../Images/card4.png';
import freeinternship from '../Images/guarantee card.png';
import card6 from '../Images/card6.png';
import Courses from './Courses';
import Footer from './Footer';
import Testimonial from './Testimonial';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

function Hero()
{
    const navigate=useNavigate();
    function CoursesHandler()
    {
        navigate('/courses');
    }

    const username=useRef(null);
    const userph=useRef(null);
    const usertext=useRef(null);

    const [courseSelectedFromDialog, setcourseSelectedFromDialog] = useState('')
    function writeUserData()
    {
        const name=username.current.value;
        const p_no=userph.current.value;
        const query=usertext.current.value;
        const course=document.getElementById('course').value;
        // console.log(name,p_no,query,course);

        let tempuser={
            Name:name,
            Phone_Number:p_no,
            Course:course,
            Query:query
        }

        fetch('https://codingwiz-query-default-rtdb.firebaseio.com/tempuser.json',{method:'post',body:JSON.stringify(tempuser)}).then(()=>
        {
            console.log('Data Added Successfully')
        })
        setshowDialog(false);
    }

    const [showDialog, setshowDialog] = useState(false)

    useEffect(() => {
        const timer = setTimeout(()=>{
            setshowDialog(true)
        }, 15000)
        return ()=>clearTimeout(timer)
    }, [])
    return(
        <div className="container-fluid">
        <div className="row justify-content-evenly align-items-center hero-row flex-wrap-reverse">
            <div className="col-md-6 px-4 py-2">
                <h1 className='start-text'>Start your Dream Career with <span className='codingwiztext'>CodingWiz</span></h1>
                <p>Be job ready by learning top & trending technologies used by leading MNCs at just starting price from ₹999!</p>
                <button className="hero-btn" onClick={CoursesHandler}>Explore Courses</button>
                <a href="tel:9623235838" className="callTutors"><button className="hero-btn2">Call Tutors</button></a>

            </div>
            <div className="col-md-5">
                {/* <img src={HeroGif2} className="img-fluid"></img> */}
                <img src={HeroGif4} className="img-fluid"></img>

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
            <img src={freeinternship} className='img-fluid'></img>
            </div>

            <div className="col-md-3 yus-card m-2">
            <img src={card6} className='img-fluid'></img>
            </div>
        </div>

        {/* start of Modal */}
        {
            showDialog && 
        <div style={{background: 'rgba(0, 0, 0, 0.4)', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{background: 'white', padding: 15, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '30vw', maxWidth: '90vw'}}>
                
                <div className='header' style={{display: 'flex', paddingBottom: 10, justifyContent: 'space-between', borderBottom: '#999 0.5px solid', width: '100%'}}>
                    <span style={{fontWeight: '600',color:'blueviolet'}}>Get upto 100% scholarship</span>
                    <span style={{cursor: 'pointer'}} onClick={()=>{setshowDialog(false)}}>✖</span>
                </div>
                <div style={{marginTop: 20}}>
                    {/* <p style={{fontWeight: '500', marginBottom: 8}}>Full Name</p> */}
                    <input placeholder='Enter your Full Name' style={{border: '#a4a4a4 0.5px solid', padding: 5, paddingLeft: 12, borderRadius: 5, width: '100%'}} ref={username} className="query_inp"/>
                </div>
                <div style={{marginTop: 20}}>
                    {/* <p style={{fontWeight: '500', marginBottom: 8}}>Phone Number</p> */}
                    <input placeholder='Enter your Phone Number' type="tel" maxLength={10}style={{border: '#a4a4a4 0.5px solid', padding: 5, paddingLeft: 12, borderRadius: 5, width: '100%'}} ref={userph} className="query_inp"/>
                </div>
                <div style={{marginTop: 20}}>
                {/* <p style={{fontWeight: '500', marginBottom: 8,color:'#606060'}}>Interested Course?</p> */}
                    <select style={{border: '#a4a4a4 0.5px solid', padding: 5, paddingLeft: 12, borderRadius: 5, width: '100%', outline: 0, background: '#fff'}} id="course" className="sel">
                        <option onClick={()=>{setcourseSelectedFromDialog()}}>Select your course</option>
                        <option onClick={()=>{setcourseSelectedFromDialog('Full Stack Devlopement')}}>Full Stack Development</option>
                        {/* <option onClick={()=>{setcourseSelectedFromDialog('MERN Backend Development')}}>MERN Backend Development</option> */}
                        {/* <option onClick={()=>{setcourseSelectedFromDialog('Android/IOS Development')}}>Android/IOS Development</option> */}
                        {/* <option onClick={()=>{setcourseSelectedFromDialog('Java DSA')}}>Java DSA</option>
                        <option onClick={()=>{setcourseSelectedFromDialog('C++ DSA')}}>C++ DSA</option> */}
                        <option onClick={()=>{setcourseSelectedFromDialog('Machine Learning')}}>Machine Learning</option>
                    </select>
                </div>
                <div style={{marginTop: 20}}>
                    {/* <p style={{fontWeight: '500', marginBottom: 10}}>Your Query</p> */}
                    <textarea placeholder='Reason for applying scholarship?' style={{border: '#a4a4a4 0.5px solid', padding: 5, paddingLeft: 12, borderRadius: 5, width: '100%'}} ref={usertext} className="query_inp"/>
                </div>
                <button style={{
                    backgroundColor: 'blueviolet',
                    border: 'none',
                    borderRadius: 8,
                    color: 'white',
                    marginTop: 15,
                    // alignSelf: 'center',
                    padding: 9,
                    paddingLeft: 20,
                    paddingRight: 20,
                }} onClick={writeUserData}>Submit</button>
            </div>

         </div>
        }
        {/* End of Modal */}


        {/* <Courses/> */}
        <Courses/>

        {/* testimonial start */}
        <Testimonial/>
        {/* testimonial end */}
        
        <Footer/>
        {/* end of container-fluid */}
        </div>
    )
}

export default Hero;