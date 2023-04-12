import React, {useState} from 'react';
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      
 
    { !loggedIn ?
      <Welcome/>:
      <Home/>
    }
    </div>
  );
}

export default App;
