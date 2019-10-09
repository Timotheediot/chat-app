import React from 'react'
import Contact from './Contact';


const actors =[
    {

        name: "Gérard Depardieu",
        avatar: "https://i.postimg.cc/zvqsfmxK/profile-2398782-960-720.png",
        online: (true)
    },

    {
        name: "Sophie Marceau",
        avatar: "https://i.postimg.cc/zvqsfmxK/profile-2398782-960-720.png",
        online: (false)
    },

    {
        name: "Jean Rochefort", 
        avatar: "https://i.postimg.cc/zvqsfmxK/profile-2398782-960-720.png",
        online: (true)
    },

    {
        name: "Niels Arestrup", 
        avatar: "https://i.postimg.cc/zvqsfmxK/profile-2398782-960-720.png",
        online: (false)
    },

    {
        name: "Joaquin Phoenix",
        avatar: "https://i.postimg.cc/zvqsfmxK/profile-2398782-960-720.png",
        online:(true)
    }
];

const ActorList = () => (
    <div>
        {actors.map(item => (
          <Contact name={item.name} avatar={item.avatar} online ={item.online} />
        ))}
    </div>
)

export default ActorList;
