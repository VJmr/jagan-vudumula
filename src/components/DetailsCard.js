import React, {Component} from 'react';

class DetailsCard extends Component {
    render() {
        let responsibilitiesLength = this.props.data.responsibilities.length;
        let detailDesc;
        if(responsibilitiesLength > 0){
            detailDesc = <div>
                            <h6>Responsibilities: </h6>
                            <ul>
                                {
                                this.props.data.responsibilities.map((responsibility, index)=> {
                                    return (
                                        <li key={index}>{responsibility}</li>
                                    )
                                })  
                                }
                            </ul>
                        </div>
        } else {
            detailDesc = <div>
                            <h6>Specialization: </h6>
                            <p>{this.props.data.description}</p>
                         </div>
        }
        return(
            <div className="details__box">
                <h5><b>{this.props.data.title}</b>, {this.props.data.organisation}</h5>
                <p>{this.props.data.period}</p>
                {detailDesc}
            </div>
        )
    }
}

export default DetailsCard;