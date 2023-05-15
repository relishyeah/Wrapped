import { useEffect } from "react"
import { getPlaylists } from '../helper';


export type callbackProps ={
    setLoading: (b:boolean)=>void,
    setLoggedIn: (b:boolean)=>void,
    setName:(s:string)=>void;
    setPhoto:(s:string)=>void;
    setYears:(n:any)=>void;
    setTopSong:(a:Array<string|number>)=>void;
    setTopArtist:(a:Array<string|number>)=>void;
    setTopAlbum:(a:Array<string|number>)=>void;
}

const Callback = (props:callbackProps) => {
  useEffect(() =>{
    const fetchData = async () =>{
      await getPlaylists(props.setName,props.setPhoto,props.setYears,props.setTopSong,props.setTopArtist,props.setTopAlbum)
    }
    fetchData().catch(console.error);
    
  },[])

    return (
    <></>
  )
}

export default Callback