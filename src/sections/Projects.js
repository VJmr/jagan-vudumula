import React, {Component} from 'react';
import Project from '../components/Project';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    projectName: 'Market Analytics',
                    companyName: 'RealPage',
                    period: 'current',
                    technologies: ['Angular', 'C#', '.NET', 'MVC', 'AngularJS', 'WebApi', 'HTML', 'CSS', 'JIRA', 'Git', 'SQL', 'Azure DevOps'],
                    color: '#FF4500'
                },
                {
                    projectName: 'Asset Snapshot',
                    companyName: 'RealPage',
                    period: '9 months',
                    technologies: ['Angular', 'NodeJS', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'Git'],
                    color: '#808000'
                },
                {
                    projectName: 'IT GetDevices',
                    companyName: 'TCS',
                    period: '5 months',
                    technologies: ['C#', '.NET', 'MVC', 'WebApi', 'AngularJS', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Azure', 'VSO'],
                    color: '#1E90FF'
                },
                {
                    projectName: 'IT Showcase',
                    companyName: 'TCS',
                    period: '36 months',
                    technologies: ['C#', '.NET', 'MVC', 'HTML', 'CSS', 'jQuery', 'SQL', 'Azure', 'TFS'],
                    color: '#D2691E'
                },
                {
                    projectName: 'Partner Sales Connect',
                    companyName: 'TCS',
                    period: '3 months',
                    technologies: ['C#', '.NET', 'MVC', 'WebApi', 'AngularJS', 'HTML', 'CSS', 'SQL', 'Azure', 'TFS'],
                    color: '#696969'
                },
                {
                    projectName: 'AEP',
                    companyName: 'TCS',
                    period: '6 months',
                    technologies: ['C#', 'ASP.NET', 'HTML', 'CSS', 'jQuery', 'SQL', 'TFS'],
                    color: '#228B22'
                }
            ]
        }
    }
    render() {
        return(
            <section id="projects" className="container">
                <h1>Projects</h1>
                <div className="row my__section">
                    {
                        this.state.projects.map((project, index) => {
                            return (
                                <Project project={project} key={index}></Project>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Projects;