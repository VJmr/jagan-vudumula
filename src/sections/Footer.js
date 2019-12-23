import React, {Component} from 'react';
import { IoLogoGithub, IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

class Footer extends Component {
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
        let currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        return(
            <footer>
                <ul>
                    {
                        this.state.links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link} target="blank">
                                        {item.icon}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>All right reserved to <b>Jagan Vudumula</b> @ {currentYear}</p>
            </footer>
        )
    }
}

export default Footer;