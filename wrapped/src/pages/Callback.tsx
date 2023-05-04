import { useEffect } from "react"
import { callback,getPlaylists } from '../helper';


export type callbackProps ={
    setLoading: (b:boolean)=>void,
    setLoggedIn: (b:boolean)=>void,
    setName:(s:string)=>void;
    setPhoto:(s:string)=>void;
}

const Callback = (props:callbackProps) => {
  useEffect(() =>{
    props.setLoading(true)
    props.setLoggedIn(true)
    callback().then(()=>{
      getPlaylists(props.setName,props.setPhoto)

  })},[])

    return (
    <></>
  )
}

export default Callback