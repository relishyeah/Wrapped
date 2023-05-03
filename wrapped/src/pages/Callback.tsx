import { useEffect } from "react"
import { callback,getPlaylists,getProfile } from '../helper';


export type callbackProps ={
    setLoading: (b:boolean)=>void,
    setLoggedIn: (b:boolean)=>void,
}

const Callback = (props:callbackProps) => {
  useEffect(() =>{
    props.setLoading(true)
    props.setLoggedIn(true)
    callback().then(()=>getPlaylists())
  },[])

    return (
    <></>
  )
}

export default Callback