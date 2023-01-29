import Footer from "./Footer";
function Technologies()
{
    return(
        <div className="container-fluid">
            <div className="row justify-content-evenly mt-3">
                <div className="col-md-2 text-center t-card">
                    <img src="https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fjs.png&w=256&q=75" className="js"></img>
                    <h6>JavaScript</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="react"></img>
                    <h6>ReactJS</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png" className="express"></img>
                    <h6>ExpressJS</h6>
                </div>

                <div className="col-md-2 text-center t-card ">
                    <img src="https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fnode.png&w=256&q=75" className="nodejs"></img>
                    <h6>NodeJS</h6>
                </div>

                <div className="col-md-2 text-center t-card ">
                    <img src="https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fhtml.png&w=256&q=75" className="html"></img>
                    <h6>HTML</h6>
                </div>

            </div>

            <div className="row justify-content-evenly my-3">
                <div className="col-md-2 text-center t-card">
                    <img src="https://classes.pixsdev.com/_next/image?url=%2FImgs%2FCourses%2Fcss.png&w=256&q=75" className="css"></img>
                    <h6>CSS</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="css"></img>
                    <h6>Git</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" className="css"></img>
                    <h6>Github</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" className="bootstrap"></img>
                    <h6>Bootstrap</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg" className="mongodb"></img>
                    <h6>MongoDB</h6>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Technologies;