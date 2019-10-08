import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
        name= "John Doe" 
        avatar= "https://randomuser.me/api/portraits/thumb/men/75.jpg" 
        online= {true}
        />
        <Contact 
        name= "Sophie Lafutte" 
        avatar= "https://randomuser.me/api/portraits/thumb/men/75.jpg" 
        online= {false}
        />
        <Contact 
        name= "Agathe Gnagna" 
        avatar= "https://randomuser.me/api/portraits/thumb/men/75.jpg" 
        online= {true}
        />
    </div>
  );
}

export default App;
