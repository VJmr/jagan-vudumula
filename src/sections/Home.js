import React, {Component} from 'react';
import { GoMail, GoLocation } from 'react-icons/go';
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Jagan from '../../src/assets/images/Jagan.jpg'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            links: [
                {
                    link: 'https://github.com/Vjmr',
                    icon: <IoLogoGithub></IoLogoGithub>
                },
                {
                    link: 'https://www.linkedin.com/in/jaganvudumula/',
                    icon: <FaLinkedin></FaLinkedin>
                },
                {
                    link: 'https://www.facebook.com/jaganvudumula',
                    icon: <IoLogoFacebook></IoLogoFacebook>
                },
                {
                    link: 'https://twitter.com/na_peru_jagan',
                    icon: <FaTwitterSquare></FaTwitterSquare>
                }
            ]
        }
    }
    render() {
        return(
            <section id="home" className="container">
                <div className="row my__section">
                    <div className="col-md-6 order-md-1 order-2 my__details">
                        <h1 className="my__name">Jagan Vudumula</h1>
                        <h4 className="my__role">Web Developer</h4>
                        <div className="basic__details">
                            <p><GoMail />&nbsp;&nbsp;jaganvudumula@gmail.com</p>
                            <p><GoLocation />&nbsp;&nbsp;Hyderabad, Telangana, India</p>
                        </div>
                        <div>
                            {
                                this.state.links.map((item, index) => {
                                    return (
                                        <a href={item.link} className="basic__links" target="blank" key={index}>
                                            {item.icon}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
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