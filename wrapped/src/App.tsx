import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import Callback from './pages/Callback'
import './App.css';

export type TextCardProps= {

}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)
  const [animate,setAnimate] = useState(false)
  const [percent,setPercent] = useState(0);
  const [name,setName] = useState('')
  const [photo,setPhoto] = useState('')
  const [years,setYears] = useState(0)
  const [explicit,setExplicit] = useState(['',0])
  const [topArtist,setTopArtist] = useState(['',0])
  const [topAlbum,setTopAlbum] = useState(['',0])


  return (
    <BrowserRouter>
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
        setExplicit={setExplicit}
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
       explicit={explicit}
       topAlbum={topAlbum}
       topArtist={topArtist}
       />
        
      </div>
  
       </div>
      
    </BrowserRouter>
     
  );
}

export default App;
