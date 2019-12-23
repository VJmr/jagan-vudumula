import React, {Component} from 'react';
import ContactCard from '../components/ContactCard';
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { GoMail } from 'react-icons/go';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactDetails: [
                {
                    contactType: 'Email',
                    link: 'mailto:jaganvudumula@gmail.com',
                    info: 'jaganvudumula@gmail.com',
                    iconComponent: <GoMail></GoMail>
                },
                {
                    contactType: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/jaganvudumula/',
                    info: 'Jagan Vudumula',
                    iconComponent: <FaLinkedin></FaLinkedin>
                },
                {
                    contactType: 'Phone',
                    link: '#',
                    info: '+91 XXX-XXXX-XXX',
                    iconComponent: <FaPhone></FaPhone>
                }
            ]
        }
    }
    render() {
        return(
            <section id="contact" className="container">
                <h1>Contact Me</h1>
                <div className="row my__section">
                   {
                       this.state.contactDetails.map((contact, index)=>{
                           return (
                                <ContactCard contact={contact} key={index}></ContactCard>
                           )
                       })
                   }
                </div>
            </section>
        )
    }
}

export default Contact;