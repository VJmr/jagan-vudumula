import React, {Component} from 'react';
import { GoMail, GoLocation } from 'react-icons/go';
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Jagan from '../../src/assets/images/Jagan.jpg'

class Home extends Component {
    render() {
        return(
            <section id="home" className="container">
                <div className="row my__section">
                    <div className="col-md-6">
                        <span></span>
                        <h1 className="my__name">Jagan Vudumula</h1>
                        <h4 className="my__role">Web Developer</h4>
                        <div className="basic__details">
                            <p><GoMail />&nbsp;&nbsp;jaganvudumula@gmail.com</p>
                            <p><GoLocation />&nbsp;&nbsp;Hyderabad, Telangana, India</p>
                        </div>
                        <div>
                            <a href="https://github.com/Vjmr" className="basic__links" target="blank">
                                <IoLogoGithub></IoLogoGithub>
                            </a>
                            <a href=
                            "https://www.linkedin.com/in/jaganvudumula/" className="basic__links" target="blank">
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a href="https://www.facebook.com/jaganvudumula" className="basic__links" target="blank">
                                <IoLogoFacebook></IoLogoFacebook>
                            </a>
                            <a href="https://twitter.com/na_peru_jagan" className="basic__links" target="blank">
                                <FaTwitterSquare></FaTwitterSquare>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="my__picture-container">
                            <div className="my__picture">
                                <img alt="Jagan Vudumula" src={Jagan}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;