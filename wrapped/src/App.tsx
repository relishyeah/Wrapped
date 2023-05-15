import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import Callback from './pages/Callback'
import './App.css';


function App() {
  const [token, setToken] = useState<string|null>('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [animate,setAnimate] = useState(false);
  const [shake,setShake] = useState(false)
  const [percent,setPercent] = useState(0);
  const [name,setName] = useState('')
  const [photo,setPhoto] = useState('')
  const [years,setYears] = useState([0,0,0])
  const [topSong,setTopSong] = useState(['',0])
  const [topArtist,setTopArtist] = useState(['',0])
  const [topAlbum,setTopAlbum] = useState(['',0])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      //@ts-ignore
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("access_token", token)
        setShake(!shake)
        setTimeout(() => {
            setAnimate(true);
          }, 1450);
        setTimeout(() => {
          setLoggedIn(true)
        }, 3700);
    }

    setToken(token)
    

}, [])

  return (
      <div className="App">
         <div className="container">
             <div className={(loggedIn && !loading) ?"title moveMe" : "title"}>
      Wrapped,<br/>Wrapped
      </div> 
      <Welcome  animate={animate} loggedIn={loggedIn} token={token} shake={shake} />

      {token &&<Callback 
        setLoading = {setLoading} 
        setLoggedIn={setLoggedIn} 
        setName={setName} 
        setPhoto={setPhoto} 
        setYears={setYears}
        setTopSong={setTopSong}
        setTopArtist={setTopArtist}
        setTopAlbum={setTopAlbum}
        />}
      <Home loggedIn ={loggedIn}
       loading={loading} 
       setLoading={setLoading} 
       animate={animate} 
       name={name} 
       photo={photo} 
       years={years}
       topSong={topSong}
       topAlbum={topAlbum}
       topArtist={topArtist}
       className={(loading) ? 'hidden' : 'normal'}
       />
        
      </div>
  
       </div>
     
  );
}

export default App;
