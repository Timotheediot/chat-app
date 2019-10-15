import React from 'react'
import './Contact.css'


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {online: false};
    }

    handleClick = (event) => {
        this.setState({
          online: !this.state.online
        });
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
                        <div onClick={this.handleClick} className={this.state.online ? "status-online" : "status-offline"}></div>
                        {this.state.online ? 'Online' : 'Offline'}

                        </div>

                    </div>
                </div>

                



            </figure>
            

        </div>
    )
    }
}

export default Contact;

