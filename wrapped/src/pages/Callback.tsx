import { useEffect } from "react"
import { callback,getPlaylists } from '../helper';


export type callbackProps ={
    setLoading: (b:boolean)=>void,
    setLoggedIn: (b:boolean)=>void,
    setName:(s:string)=>void;
    setPhoto:(s:string)=>void;
    setYears:(n:number)=>void;
}

const Callback = (props:callbackProps) => {
  useEffect(() =>{
    props.setLoading(true)
    props.setLoggedIn(true)
    callback().then(()=>{
      let playlists = getPlaylists(props.setName,props.setPhoto,props.setYears)
  })},[])

    return (
    <></>
  )
}

export default Callback