type album ={
  id:string;
  name:string;
  photo:string;
}
type artist ={
  name:string;
  id:string;
}

type song ={
  id:string;
  artists:Array<string>;
  album:album;
  name:string;
  explicit:boolean
}

type tracks={
  year:string;
  songs:Array<song>;
  explicit:number;
}

type playlist={
  id:string;
  year:string;
}
 
const clientId: string = '82c274ec26b84f0393a09e74f288e3cc';
//const redirectUri:string = 'https://relishyeah.github.io/Wrapped/';
const redirectUri:string= 'http://localhost:3000/'


export const  authorize = ():string => {
  let scope:string = 'playlist-read-private';

   return 'https://accounts.spotify.com/authorize?response_type=token' +'&client_id=' + encodeURIComponent(clientId )+'&scope=' + encodeURIComponent(scope)+'&redirect_uri=' + encodeURIComponent(redirectUri)
      
}

const nullToEmpty = (str:string|null):string =>{
    return str === null ? '' : str;
}

export const getProfile = async()=> {
    let accessToken = localStorage.getItem('access_token');
    try
      {const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      } 
    });
  
    const data = await response.json();
    return [data.id,data.display_name,data.images[0].url]
  } catch (error) {
    console.error(error);
    return ['1','Error','3']
  }
  }

  export const getArtist = async(id:string):Promise<Array<string>>=> {
    console.log('https://api.spotify.com/v1/artists/'+id)
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/artists/'+id, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    console.log(data)
    return [data.images[1].url,data.name]
  }

  const playlistCall = async(accessToken:string|null):Promise<playlist[]> =>{
    let next = 'https://api.spotify.com/v1/me/playlists?limit=50&offset=0'
    let playlists:Array<playlist>=[];
    const songRegex =/Your Top Songs/igm
    const yearRegex = /\d{4}/gm
    while(next){
      const response = await fetch(next, {
        headers: {
          Authorization: 'Bearer ' + accessToken
      }});
      const json = await response.json()
      
      console.log(json)
      next = json.next
      
    json.items.forEach((obj:any) => {
      if (obj.name.match(songRegex) && obj.owner.id === 'spotify'){
        const id:string = obj.id
        const year:string = obj.name.match(yearRegex)[0]
        playlists.push({id:id,year:year} );
      }
    })
    }
    
    
    console.log('playlists',playlists)
    return playlists
  }

const getHighestN = (obj:any,n:number) =>{
  let ret:any = {}

  Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
   {
      if(ind < n){
         ret[key] = obj[key]
      }
   });
   return ret;
}


const getCounts = (years:any)=>{
  let artistCounter:any = {'':[0,0]}
  // Name of Artist, Number of Unique SOngs, percent of repeats?
  let topArtist= ''
  
  let songCounter:any = {}
  // Name of Song, Name of Artist(s),
  let topSong =['','',0]

  let albumCounter:any = {}
  let topAlbums = [];
  const uniqueSongs = new Set();

  // Loop through all years
  for (let i=0;i<years.length;i++){
    let cur =years[i].tracks

    // Loop through all tracks
    for (let j=0;j<cur.length;j++){
      let item = cur[j]

      if(songCounter[item.id] ===undefined){
        songCounter[item.id] = [0,item.name,item.artists[0].id,0]
      }
      songCounter[item.id][0] += 1
      songCounter[item.id][3] += j+1

      if(albumCounter[item.album.photo] ===undefined){
        albumCounter[item.album.photo] = 0
      }
      albumCounter[item.album.photo] += 1

      item.artists.forEach((artist:any) =>{
        if(artistCounter[artist.id] ===undefined){
          artistCounter[artist.id] = [0,0]
        }
 
        artistCounter[artist.id][1] += 1
        if(!uniqueSongs.has(item.id)){
          artistCounter[artist.id][0] += 1
          if(artistCounter[artist.id][0]>artistCounter[topArtist][0]){
            topArtist = artist.id
          }
        }
      })
      uniqueSongs.add(item.id)
    }
  }
  console.log(songCounter)
  if (Object.keys(songCounter).length !== 0){
    topSong = songCounter[Object.keys(songCounter).reduce((a, b) => songCounter[a][0] > songCounter[b][0] ? a : b)]
  topSong[3] = Math.floor((topSong[3] as number) / (topSong[0] as number))
  }
  
  console.log('ttt',topSong)
  topAlbums =getHighestN(albumCounter,4)
  return [topSong,topAlbums,[topArtist,...artistCounter[topArtist]],Object.keys(songCounter).length]
}

const getTracks = async(playlists:Array<playlist>,accessToken:string|null) =>{
    let explicit = 0;
    let i=0;
    let tracks = [];
    for(i;i< playlists.length;i++){
      const response = await fetch('https://api.spotify.com/v1/playlists/'+playlists[i].id+'/tracks', {
        headers: {
          Authorization: 'Bearer ' + accessToken
      }});
        const json = await response.json()
        let year:string = playlists[i].year;
        let songs:Array<song>=json.items.map((item:any) =>{
          let artists:Array<artist> = item.track.artists.map((artist:any) =>{
            return {name:artist.name,id:artist.id};
            
          });
          let album:album = {name:item.track.album.name,id:item.track.album.id, photo:item.track.album.images[1].url};
          let name:string = item.track.name;
          let id:string = item.track.id;
          if (item.track.explicit){
            explicit++
          };
          return {artists:artists,album:album,name:name,id:id}
        })
        tracks.push({year:year,tracks:songs})
  };
  return [tracks,explicit]
}


  export const getPlaylists = async(setName:(s:string)=>void,setPhoto:(s:string)=>void,setYears:(n:any)=>void,setTopSong:(a:Array<string|number>)=>void,setTopArist:(a:Array<string|number>)=>void,setTopAlbum:(a:Array<string|number>)=>void)=> {
    const  [id,name,photo] = await getProfile()
    setName(name)
    setPhoto(photo)
    console.log(id,name,photo)
    let accessToken = localStorage.getItem('access_token');
    let now = Date.now()
    const playlists =  await playlistCall(accessToken)

    const temp:any =  await getTracks(playlists,accessToken)
    const tracks = temp[0]
    const explicit:number = temp[1] / (playlists.length)
    const counts = getCounts(tracks)
    console.log(counts)
    console.log(counts[2][0])
    const topSong = await getArtist(counts[0][2]);
    const topArtistReal =await getArtist(counts[2][0])
    setTopSong([...counts[0],...topSong])
    console.log([...counts[0],...topSong])
    setTopAlbum(counts[1])
    setTopArist([...counts[2],...topArtistReal])
    setYears([playlists.length,counts[3],explicit])
    let later = Date.now()
    console.log(later-now)
    return [name,photo,tracks]
  }




