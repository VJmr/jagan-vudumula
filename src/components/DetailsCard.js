import React, {Component} from 'react';

class DetailsCard extends Component {
    render() {
        return(
            <div className="details__box">
                <h5><b>{this.props.data.title}</b>, {this.props.data.organisation}</h5>
                <p>{this.props.data.period}</p>
                <div>
                    <h6>Responsibilities</h6>
                    <ul>
                        <li>ABC</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetailsCard;