import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import CourseDetail from './Components/CourseDetail';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ScrollToTop from './Components/ScrollToTop';
import Display from './Components/Display';
import CoursePage from './Components/CoursePage';
import Loading from './Images/loading.gif'
import { useEffect , useState } from 'react';
import Logo from './Images/cw_logo.png';
import About from './Components/About';
import Register from './Components/Register';
import {useNavigate} from 'react-router-dom';
// So in future if we need to add any new card we can just pass JSON Card data in Courses.js File

function App() {
  const [loading, setloading] = useState(false)
  const [itemClicked, setitemClicked] = useState(false)
  const [shouldAddClass, setShouldAddClass] = useState(false);
  const navigate=useNavigate();



  useEffect(() => {

    // setloading(true)
    document.getElementById('loader-container').style.display='flex'
    // onSiteLoaded()

    // set a timeout to add the class after 10 seconds
      const timeoutId = setTimeout(() => {
        setShouldAddClass(false);
      }, 1000)
      return () => clearTimeout(timeoutId);
    }, []);

    function Logohandler()
    {
      navigate('/');
    }
  return (

    <div className="App" onLoad={()=>{document.getElementById('loader-container').style.display='none'}}>
      {
        <div id="loader-container" style={{height: '100vh', width: '100vw', background: 'black', color: 'black', display: 'none', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: 1000}}>
          <img src={Loading} alt='Loading Image' />
          {/* Loading... */}
        </div>
      }
      {/* navbar */}
      {/* <p className={shouldAddClass ? 'd-none' : 'early-bird-text'}><i class="bi bi-gift-fill"></i> End of Season Sale - Atleast 60% off on all courses [Limited Seats Only]</p> */}
    {/* <p className='early-bird-text'><i class="bi bi-twitter"></i> Early bird offer : Guaranteed free Internship</p> */}
      <div>
        <a href="https://wa.me/9084321252" target="_blank"><p style={{position:'fixed',right:'15px',backgroundColor:'white',bottom:'10px',color:'#25D366',fontSize:'35px',padding:'5px 13px',borderRadius:'50%',boxShadow:"0px 0px 8px #25D366",border:"1px solid #D3D3D3",margin:'5px 0px'}}><i class="bi bi-whatsapp"></i></p></a>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={Logo} className="logo me-2" onClick={Logohandler}/>
          <Link to="/" className="navbar-brand text-white link">CodingWiz</Link>
          <button className="navbar-toggler" type="button" id="trial-btn" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link to="/" onClick={()=>{ navigator.userAgent.match('/Android/i')||navigator.userAgent.match('/iPhone/i')||navigator.userAgent.match('Mozilla/5.0') && document.getElementById('trial-btn').click()}} className="nav-link active text-white link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" onClick={()=>{ navigator.userAgent.match('/Android/i')||navigator.userAgent.match('/iPhone/i')||navigator.userAgent.match('Mozilla/5.0') && document.getElementById('trial-btn').click()}} className="nav-link active text-white link" aria-current="page">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" onClick={()=>{ navigator.userAgent.match('/Android/i')||navigator.userAgent.match('/iPhone/i')||navigator.userAgent.match('Mozilla/5.0') && document.getElementById('trial-btn').click()}} className="nav-link active text-white link" aria-current="page">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/technologies" onClick={()=>{ navigator.userAgent.match('/Android/i')||navigator.userAgent.match('/iPhone/i')||navigator.userAgent.match('Mozilla/5.0') && document.getElementById('trial-btn').click()}} className="nav-link text-white link" >Technologies</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" onClick={()=>{ navigator.userAgent.match('/Android/i')||navigator.userAgent.match('/iPhone/i')||navigator.userAgent.match('Mozilla/5.0') && document.getElementById('trial-btn').click()}} className="nav-link text-white link">Contact</Link>
              </li>
              <button className="call-btn ms-2"><a href="tel:9623235838" className="call-anchor">Call Us</a></button>
            </ul>
          </div>
        </div>
      </nav>


      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/courses" element={<CoursePage/>}></Route>
        {/* Temporary route below */}
        <Route path="/course-page" element={<CoursePage/>}></Route>
        <Route path="/technologies" element={<Technologies/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/course-detail" element={<CourseDetail/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/view-student" element={<Display/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/register" element={<Register/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
