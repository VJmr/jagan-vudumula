import React, {Component} from 'react';
import DetailsCard from '../components/DetailsCard';

class Experiences extends Component {
    constructor(){
        super();
        this.state = {
            experiences: [
                {
                    title: 'Full Stack Web Developer',
                    organisation: 'RealPage',
                    period: '2018 - till date',
                    responsibilities: [],
                },
                {
                    title: 'Full Stack Web Developer',
                    organisation: 'TCS',
                    period: '2013 - 2017',
                    responsibilities: [],
                }
            ],
            education: {
                title: 'Bachelor of Technology',
                organisation: 'GVPCOE (JNTU K)',
                period: '2009 - 2013',
                responsibilities: [],
                description: ''
            }
        }
    }
    render() {
        return(
            <section id="experiences" className="container">
                <div className="row my__section">
                    <div className="col-md-6">
                        <div className="exp__details">
                            <h2>Work Experience</h2>
                            {
                                this.state.experiences.map((item, index) => {
                                    return (
                                      <DetailsCard data={item} key={index}></DetailsCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="edu__details">
                            <h2>Education</h2>
                            <DetailsCard data={this.state.education}></DetailsCard>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experiences;