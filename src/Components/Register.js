import Footer from '../Components/Footer'
function Register()
{
    function RegisterHandler()
    {
        // alert("hey");
        let name=document.getElementById("floatingInput").value;
        let email=document.getElementById("floatingPassword").value;
        let course=document.getElementById("course").value;
        console.log(course);
        if((name=="") || (email==""))
        {
            alert('Fill in all details')
        }
        else
        {
            if(course=="frontend")
            {
                window.open('https://chat.whatsapp.com/LNXrLwGnTL16dhQCQQyCCV')
            }
            else if(course=="backend")
            {
                window.open('https://chat.whatsapp.com/Jq1cyv8hMfcIEksYSHKKVU')
            }
            else if(course=="app")
            {
                window.open('https://chat.whatsapp.com/Ij55zkAwiKS2q9TENupxig')
            }
            else if(course=="ml")
            {
                window.open('https://chat.whatsapp.com/J5YyEC807t47g6yQzBqwhW')
            }
            else if(course=="dsa")
            {
                window.open('https://chat.whatsapp.com/CPs99R2CjLX2aXi9SVXUFZ')
            }
            else
            {
                window.open('https://chat.whatsapp.com/LNXrLwGnTL16dhQCQQyCCV')
            }
        }
    }
    return(
        <div className="container-fluid">
            <div className='row justify-content-center'>
                <div className='col-md-5 px-2 py-3 mt-3 mb-2 text-center'>
                    <h3 >Join <span className='masterclass-text'>One Day Free</span> Masterclass</h3>
                    <p>Master the concepts with real world scenario and examples! The must-have masterclass in 2023</p>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Email Address</label>
                        </div>
                        <select className="form-select mb-3" aria-label="Default select example" id="course">
                        <option selected value="frontend">Looking for Masterclass?</option>
                        <option value="frontend">Frontend Development Masterclass</option>
                        <option value="backend">Backend Development Masterclass</option>
                        <option value="app">App Development Masterclass</option>
                        <option value="ml">Machine Learning Masterclass</option>
                        <option value="dsa">Data Structure & Algorithm Masterclass</option>
                        </select>
                        <button className='mb-3' style={{padding:"6px",width:"100%",borderRadius:"6px",border:"none",color:"white",backgroundColor: "#4158D0",
                        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}}><span style={{fontSize:"19px"}} onClick={RegisterHandler}>Enroll Now for Free</span></button>
                        <div className='border rounded p-3'>
                        <h4 className='masterclass-text'><i class="bi bi-gift-fill"></i> Takeways of Live Masterclass</h4>
                        <h5><i class="bi bi-check2-square"></i> Lifetime Access to Project<br></br>
                        <i class="bi bi-check2-square"></i> Linkedin Shareable Certificate</h5>
                        </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;