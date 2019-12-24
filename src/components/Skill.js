import React, { Component } from 'react';

class Skill extends Component {
    render() {
        let logo;
        if(this.props.skill.isReactIcon) {
            logo = <span className="skill__card-icon" style={{color: this.props.skill.color}}>{this.props.skill.logo}</span>
        } else {
            logo = <span><img className="skill__card-img" src={this.props.skill.logo} alt={this.props.skill.title}></img></span>
        }
        return (
            <div className="skill__card">
                {logo}
                <h6><b>{this.props.skill.title.toUpperCase()}</b></h6>
            </div>
        )
    }
}

export default Skill;