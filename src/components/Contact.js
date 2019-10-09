import React from 'react'
import './Contact.css'


const Contact = (props) => {
    return (
        <div>
            <figure className="Contact">
                <img className="avatar"
                src={props.avatar} />
                <div>
                    <cite>{props.name}</cite>
                    <div className="status">
                        
                        <div className="status-text">
                        <div className={props.online ? "status-online" : "status-offline"}></div>
                        {props.online ? 'Online' : 'Offline'}
                        </div>
                    </div>
                </div>

                



            </figure>
            

        </div>
    )
}

export default Contact;


