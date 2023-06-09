import React, {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Home from './pages/Home/Home'
import Welcome from './pages/Welcome/Welcome';
import Callback from './pages/Callback'
import Ftux from './components/Ftux/Ftux';

import './App.css';
import { logIn } from './redux/features/loggedInSlice';
import { RootState } from './redux/store';
import { startShake } from './redux/features/shakeSlice';
import { startAnimate } from './redux/features/animateSlice';
import { setToken } from './redux/features/tokenSlice';

function App() {
  const [name,setName] = useState('')
  const [photo,setPhoto] = useState('')
  const [years,setYears] = useState([0,0,0])
  const [topSong,setTopSong] = useState(['',0])
  const [topArtist,setTopArtist] = useState(['',0])
  const [topAlbum,setTopAlbum] = useState(['',0])
  const [textbox,setTextbox] = useState(false);
  const [demo,setDemo] = useState(true);
  const dispatch = useDispatch()
  const loggedIn:boolean = useSelector((state: RootState) => state.loggedIn.value)
  const loading:boolean = useSelector((state: RootState) => state.loading.value)
  const token:string = useSelector(((state: RootState) => state.token.value))
  

  useEffect(() => {
    let hash = window.location.hash
    let token = window.localStorage.getItem("token")
    console.log(hash)
    if (hash === '#demo'){
      window.location.hash = ""
      setDemo(true);
      hash = ''
    }
    if (!token && hash) {
      
      //@ts-ignore
      const state =hash.substring(1).split("&").find(elem => elem.startsWith("state")).split("=")[1]
      if (state === 'true'){
        setDemo(true)
      }
      //@ts-ignore
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("access_token", token)
        dispatch(startShake())
        setTimeout(() => {
            dispatch(startAnimate());
          }, 1450);
        setTimeout(() => {
          dispatch(logIn())
        }, 3700);
    }

    dispatch(setToken(token))
    

}, [])

  return (
      <div className="App">
        {textbox && <Ftux/>}
         <div className="container">
             <div className={(loggedIn && !loading) ?"title moveMe" : "title"}>
      Wrapped,<br/>Wrapped
      </div> 
      <Welcome token={token}  setTextbox={setTextbox} textbox={textbox} demo={demo}/>

      {token &&<Callback 
        setName={setName} 
        setPhoto={setPhoto} 
        setYears={setYears}
        setTopSong={setTopSong}
        setTopArtist={setTopArtist}
        setTopAlbum={setTopAlbum}
        />}
      <Home 
       name={name} 
       photo={photo} 
       years={years}
       topSong={topSong}
       topAlbum={topAlbum}
       topArtist={topArtist}
       />
        
      </div>
  
       </div>
     
  );
}

export default App;
