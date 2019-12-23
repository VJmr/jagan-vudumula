import React, {Component} from 'react';
import DetailsCard from '../components/DetailsCard';

class Experiences extends Component {
    constructor(){
        super();
        this.state = {
            experiences: [
                {
                    title: 'Software Developer',
                    organisation: 'RealPage',
                    period: '2018 - till date',
                    responsibilities: ['Develop applications using Angular/React, C# .NET and SQL.'],
                },
                {
                    title: 'IT Analyst',
                    organisation: 'TCS',
                    period: '2013 - 2017',
                    responsibilities: ['Develop applications using jQuery/AngularJS, C# .NET and SQL.'],
                }
            ],
            education: {
                title: 'Bachelor of Technology',
                organisation: 'GVPCOE (JNTU K)',
                period: '2009 - 2013',
                responsibilities: [],
                description: 'Computer Science and Engineering'
            }
        }
    }
    render() {
        return(
            <section id="experiences" className="container">
                <div className="row my__section">
                    <div className="col-md-6">
                        <div className="exp__details">
                            <h1>Work Experience</h1>
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
                            <h1>Education</h1>
                            <DetailsCard data={this.state.education}></DetailsCard>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experiences;