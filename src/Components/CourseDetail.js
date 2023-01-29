function CourseDetail()
{
    return(
        <div className="container-fluid">
            <div className="relative">
            <div className="row p-5 bg-dark text-white">
                <div className="col-sm-7">
                    <h3>Frontend Development Bootcamp 2023</h3>
                    <p>Learn complete Frontend Developement with 3+ live projects, Includes HTML5, CSS3, JavaScript, Bootstrap, Git and host your project at free!</p>
                    <p className="star">5 <i class="bi bi-star-fill star"></i> <i class="bi bi-star-fill star"></i> <i class="bi bi-star-fill star"></i> <i class="bi bi-star-fill star"></i> <i class="bi bi-star-fill star"></i></p>
                </div>
            </div>
            <div className="row card-detail-row">
                <div className='col-sm-3 course-card absolute bg-white'>
                    <div className='parent-img'>
                    <img src='https://source.unsplash.com/400x400/?coding' className='course-img'></img>
                    </div>
                    <h4>Frontend Development Bootcamp</h4>
                    <p><span className="text-499">499 Only</span> <del>₹ 2999</del> 83% off</p>
                    
                    <button className='course-btn'>Buy this Course</button>
                    <p className="text-center fw-lighter money-text">Money Back Gurantee <br></br> Life time access</p>
                </div>
            </div>
            </div>
            <div className="row py-3 px-5">
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default CourseDetail;