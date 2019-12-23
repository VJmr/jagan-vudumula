import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        return (
            <div className="contact__card">
                <a href={this.props.contact.link}>
                    <div className="contact__card-icon">
                        {this.props.contact.iconComponent}
                    </div>
                    <h3>{this.props.contact.contactType}</h3>
                    <p>{this.props.contact.info}</p>
                </a>
            </div>
        )
    }
}

export default ContactCard;