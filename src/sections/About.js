import React, {Component} from 'react';
import Developer from '../../src/assets/images/Developer.jpeg'

class About extends Component {
    render() {
        return(
            <section id="about" className="container">
                <div className="row my__section">
                    <div className="col-md-6 order-md-1 order-2">
                        <img className="img__cartoon" alt="developer cartoon" src={Developer}></img>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                        <div className="about__me">
                            <h1>About me</h1>
                            <p>
                                Hello, I’m Jagan, web-developer based on Hyderabad.
                                I have 6+ years of experience in full-stack web development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;