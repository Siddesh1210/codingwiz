import Footer from "./Footer";
import SiddeshImg from '../Images/siddesh_img.jpeg'
import FaizanImg from '../Images/faizan_img.jpeg'
import NishanImg from '../Images/nishan_img.jpeg'
import UtkarshImg from '../Images/utkarsh_image.jpeg'
import VishalImg from '../Images/vishal_img.jpeg'
import UtsavImg from '../Images/utsav_img.jpeg'
import Mission_img from '../Images/mission_images.jpg'
import Vision_img from '../Images/vision_img.jpg'
import Vikrant_img from '../Images/vikrant_img.jpeg'





function About()
{
    return(
        <div className="container-fluid">
            <div className="row about-bg">
                <div className="col-md-12 py-5 px-3">
                    <h1 style={{color:"white",fontWeight:"bolder",textShadow:"3px 3px 3px blueviolet",fontSize:"40px"}} className="py-5">Empowering Developers to Innovate</h1>
                </div>
            </div>
            <div className="row justify-content-center pt-4 p-2 about-desc">
                <div className="col-md-12">
                    <p><span style={{fontSize:"25px",color:"blueviolet",fontWeight:"bolder"}}>Codingwiz</span> is registered company recognised under Ministry of Micro, Small & Medium Enterprises (M/o MSME) and has a team of passionate educators, entrepreneurs, and technology experts who believe in the power of online education to transform lives and communities.We are committed to breaking down the barriers to traditional education by offering courses and programs that are flexible, self-paced, and tailored to the unique needs and interests of each learner.</p>

                    <p>At our online educational startup, we believe that education should be a lifelong pursuit, and we are dedicated to supporting learners at every stage of their journey. Whether you are a student, a professional, or someone who simply wants to learn something new, we are here to help you achieve your goals and unlock your full potential.</p>
                </div>
            </div>

            <div className="row justify-content-evenly align-items-center my-2">
                <div className="col-md-5">
                    <img src={Mission_img} className="img-fluid" style={{borderTopLeftRadius:"80px",borderBottomRightRadius:"80px"}}></img>
                </div>
                <div className="col-md-5 pt-3">
                    <h3 className="text-center" style={{color:"#0d6efd",fontWeight:"bolder"}}>Our Mission</h3>
                    <p className="text-center">Our mission at our educational startup is to provide high-quality and innovative learning experiences that empower individuals to reach their full potential. We believe that everyone deserves access to education, regardless of their background, age, or location.Ultimately, our mission is to create a more equitable and just society by providing access to education and opportunities for all individuals to grow and thrive.</p>
                </div>
            </div>

            <div className="row justify-content-evenly align-items-center my-2 flex-wrap-reverse">
                <div className="col-md-5 pt-3">
                <h3 className="text-center" style={{color:"#0d6efd",fontWeight:"bolder"}}>Our Vision</h3>
                    <p className="text-center">Our vision at codingwiz is to create a world where learning is accessible, engaging, and effective for all. We believe that technology can be a powerful tool for transforming education, and we are committed to leveraging it to its fullest potential.Ultimately, our vision is to empower learners of all ages and backgrounds to achieve their full potential, to unlock their creativity and curiosity, and to become lifelong learners and leaders in their communities and beyond.</p>
                </div>
                <div className="col-md-5">
                    <img src={Vision_img} className="img-fluid" style={{borderTopLeftRadius:"80px",borderBottomRightRadius:"80px"}}></img>
                </div>
            </div>

            <div className="row text-center mb-2 mt-4">
                <div className="col-md-12">
                    <h1 className="py-2"><span style={{borderBottom:"5px solid #0d6efd"}}>Our Team</span></h1>
                    {/* <p>Meet with out talented team of experts</p> */}
                    {/* <h5>"Teamwork divide the task and multiplies the Success - <span style={{color:"#0d6efd"}}>Steve Jobs"</span></h5> */}
                </div>
            </div>

            
            
            <div className="row justify-content-evenly my-3">
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={SiddeshImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Siddesh Jaiswal</h3>
                            <p style={{marginBottom:"8px"}}>Founder & CEO</p>
                            <p>A veteran and enthusiastic software developer immersed with skills like Full-stack development, team building and leadership.</p>
                            <a href="https://www.linkedin.com/in/siddesh-jaiswal-3961a6223" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={FaizanImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Faizan Khawar</h3>
                            <p style={{marginBottom:"8px"}}>Co-founder & COO</p>
                            <p>An experienced Python and Machine Learning expert, has been teaching for last 3 years in various renowned educational platforms.</p>
                            <a href="https://www.linkedin.com/in/mohd-faizan-khawar-518135121" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-evenly my-3">
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={NishanImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Nishan Banga</h3>
                            <p style={{marginBottom:"8px"}}>Software Engineer - Java DSA Expert</p>
                            <p>A passionate software developer with 2 years of teaching experience  & industrial knowledge.</p>
                            <a href="https://www.linkedin.com/in/nishan-banga-2154531b4" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={UtkarshImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Utkarsh Bhardwaj </h3>
                            <p style={{marginBottom:"8px"}}>Software Engineer - Flutter App Expert</p>
                            <p>A dedicated Flutter Developer having good expertise in mobile app development.</p>
                            <a href="https://www.linkedin.com/in/utkarsh-bhardwaj-6a1034162" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-evenly my-3">
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={VishalImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Vishal Vishwajeet</h3>
                            <p style={{marginBottom:"8px"}}>Software Developer - Backend Development Expert</p>
                            <p>An passionate full stack developer with an good experience and expertise in backend technologies.</p>
                            <a href="https://www.linkedin.com/in/vishal-vishwajeet" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 py-2 rounded">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={UtsavImg} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Utsav Barnwal</h3>
                            <p style={{marginBottom:"8px"}}>Software Developer -DSA C++ Expert</p>
                            <p>A mysterious programmer with strong foundation in DSA with 350+ problem solved on Leetcode.</p>
                            <a href="https://www.linkedin.com/in/utsavbarnwal" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5 rounded">
                <div className="row align-items-center">
                        <div className="col-md-5">
                        <img src={Vikrant_img} className="img-fluid" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div className="col-md-7 py-2">
                            <h3>Vikrant Gharat</h3>
                            <p style={{marginBottom:"8px"}}>Graphic Designer - Intern</p>
                            <p>An excellent learner and passionate graphic designer.Well versed with software's like Adobe Photoshop , Adobe Premiere and Canva.</p>
                            <a href="https://www.linkedin.com/in/vikrant-gharat-348522246" target="_blank"><button className="btn btn-outline-primary">View LinkedIn</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;
