import React, {useState} from 'react';
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  return (
    <div className="App">
      <div className="container">
        <div className="title">
              Wrapped,<br/>Wrapped
        </div> 
        { !loggedIn &&
        <Welcome setLoggedIn={setLoggedIn}/>}
        <Home loading={loading} setLoading={setLoading}/>
      </div>
 
    
    </div>
  );
}

export default App;
