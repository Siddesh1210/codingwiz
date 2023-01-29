function Footer()
{
    return(
        <div className="row justify-content-evenly footer pt-5 pb-2">
            <div className="col-md-2">
                <h5>Courses</h5>
                <p>Frontend <br></br>Backend <br></br>Data Structure & Algorithm</p>
            </div>

            <div className="col-md-2">
                <h5>Technologies</h5>
                <p>JavaScript<br></br>NodeJS<br></br>ExpressJS<br></br>Java / C++</p>
            </div>

            <div className="col-md-2">
            <h5>Social Media</h5>
                <p>LinkedIn<br></br>Facebook<br></br>Instagram<br></br>Whatsapp</p>
            </div>

            <div className="col-md-2">
            <h5>Legal</h5>
                <p>Privacy Policy<br></br>Term & Condition<br></br>Refund Policy<br></br>Contact</p>
            </div>

            <hr></hr>
            <div className="col-md-10 text-center">
                <p>Copyright &#169; freetocode 2023.All right reserved.</p>
            </div>

        </div>
    )
}

export default Footer;