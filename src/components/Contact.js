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
{/* <p className="status-offline">{props.status}</p> */}
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }
//     getTellMyName(){
//         return `I am ${this.name}` 
//     }

//     getTellMyAge(){
//         return `I am ${this.age}`
//     }

// };

// let john = new Person('John', 40)
// let mary = new Person('Mary', 35)

// // JOHN
// console.log(john.getTellMyName());
// console.log(john.getTellMyAge());

// // MARY
// console.log(mary.getTellMyName());
// console.log(mary.getTellMyAge());

