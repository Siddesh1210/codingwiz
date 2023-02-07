import Footer from "./Footer";
import JS from '../Images/JS_Icon.webp'
import ReactJS  from '../Images/React_Icon.png'
import Express from '../Images/Express_Icon.png'
import NodeJS from '../Images/Node_Icon.webp'
import HTML from '../Images/Html_Icon.webp'
import CSS from '../Images/Css_Icon.webp'
import Git from '../Images/Git_Icon.png'
import Github from '../Images/Github_Icon.png'
import Bootstrap from '../Images/Bootstrap_Icon.png'
import Mongodb from '../Images/Mongo_Icon.svg'


function Technologies()
{
    return(
        <div className="container-fluid">
            <div className="row justify-content-evenly mt-3">
                <div className="col-md-2 text-center t-card">
                    <img src={JS} className="js"></img>
                    <h6>JavaScript</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={ReactJS} className="react"></img>
                    <h6>ReactJS</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={Express} className="express"></img>
                    <h6>ExpressJS</h6>
                </div>

                <div className="col-md-2 text-center t-card ">
                    <img src={NodeJS} className="nodejs"></img>
                    <h6>NodeJS</h6>
                </div>

                <div className="col-md-2 text-center t-card ">
                    <img src={HTML} className="html"></img>
                    <h6>HTML</h6>
                </div>

            </div>

            <div className="row justify-content-evenly my-3">
                <div className="col-md-2 text-center t-card">
                    <img src={CSS} className="css"></img>
                    <h6>CSS</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={Git} className="css"></img>
                    <h6>Git</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={Github} className="css"></img>
                    <h6>Github</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={Bootstrap} className="bootstrap"></img>
                    <h6>Bootstrap</h6>
                </div>

                <div className="col-md-2 text-center t-card">
                    <img src={Mongodb} className="mongodb"></img>
                    <h6>MongoDB</h6>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Technologies;