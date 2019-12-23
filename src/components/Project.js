import React, {Component} from 'react';

class Project extends Component {
    render() {
        return (
            <div className="project" style={{backgroundColor: this.props.project.color}}>
                <h4>{this.props.project.projectName}</h4>
                <p>{this.props.project.companyName}, {this.props.project.period}</p>
                <div className="technologies">
                    {
                        this.props.project.technologies.map((technology, index) => {
                            return (
                                <span key={index} className="technology">{technology}</span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Project;