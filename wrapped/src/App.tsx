import React, {useState} from 'react';
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [animate,setAnimate] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <div className={(loggedIn && !loading) ?"title moveMe" : "title"}>
              Wrapped,<br/>Wrapped
        </div> 
        { !loggedIn &&
        <Welcome setLoggedIn={setLoggedIn}
        setAnimate={setAnimate} animate = {animate}/>}
        <Home loggedIn ={loggedIn} loading={loading} setLoading={setLoading} animate={animate}/>
      </div>
 
    
    </div>
  );
}

export default App;
