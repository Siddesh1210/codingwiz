import Courses from "./Courses";
import Footer from "./Footer";
function CoursePage()
{
    return(
        <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                    <Courses/>
                    <Footer/>
               </div>
            </div>
            
        </div>
    )
}

export default CoursePage;