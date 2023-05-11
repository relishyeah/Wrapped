import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import Callback from './pages/Callback'
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [animate,setAnimate] = useState(false)
  const [percent,setPercent] = useState(0);
  const [name,setName] = useState('')
  const [photo,setPhoto] = useState('')
  const [years,setYears] = useState([0,0,0])
  const [topSong,setTopSong] = useState(['',0])
  const [topArtist,setTopArtist] = useState(['',0])
  const [topAlbum,setTopAlbum] = useState(['',0])

  useEffect(() =>{
    const re = /\?code=(.*)&state=(.*)/gm
    const test =re.exec(window.location.href)
    if(test !== null){
      //window.location.href='https://relishyeah.github.io/Wrapped/#/?code='+test[1]+'&state=' + test[2]
      window.location.href='https://relishyeah.github.io/callback?code='+test[1]+'&state=' + test[2]
    }
  }, [])

  return (
      <div className="App">
         <div className="container">
             <div className={(loggedIn && !loading) ?"title moveMe" : "title"}>
      Wrapped,<br/>Wrapped
      </div> 
      <Routes>
        <Route path='/' element={<Welcome setAnimate={setAnimate} setLoading={setLoading} setLoggedIn={setLoggedIn} animate={animate} setPercent={setPercent}  />}/>

        <Route path='/callback' 
        element={<Callback 
        setLoading = {setLoading} 
        setLoggedIn={setLoggedIn} 
        setName={setName} 
        setPhoto={setPhoto} 
        setYears={setYears}
        setTopSong={setTopSong}
        setTopArtist={setTopArtist}
        setTopAlbum={setTopAlbum}
        />} />
      </Routes>
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
