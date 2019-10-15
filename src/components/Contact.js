import React from 'react'
import './Contact.css'


class Contact extends React.Component {
    state = {
        online: false
    }

    render() {
    return (
        <div>
            <figure className="Contact">
                <img className="avatar"
                src={this.props.avatar} /> 
                <div>
                    <cite>{this.props.name}</cite>
                    <div className="status">
                        <div className="status-text">
                        <div className={this.props.online ? "status-online" : "status-offline"}></div>
                        {this.props.online ? 'Online' : 'Offline'}
                        </div>
                    </div>
                </div>

                



            </figure>
            

        </div>
    )
    }
}

export default Contact;

