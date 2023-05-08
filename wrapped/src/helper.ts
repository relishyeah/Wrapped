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

function generateRandomString(length:number):string {
    let text: string = '';
    const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  async function generateCodeChallenge(codeVerifier:string): Promise<string> {
    const digest:ArrayBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(codeVerifier),
    );

    return window.btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
 
const clientId: string = '82c274ec26b84f0393a09e74f288e3cc';
const redirectUri:string = 'http://localhost:3000/callback';

let codeVerifier:string = generateRandomString(128);

export const  authorize = async () => {
    generateCodeChallenge(codeVerifier).then(codeChallenge => {
        let state:string = generateRandomString(16);
        let scope:string = 'playlist-read-private';
      
        localStorage.setItem('code_verifier', codeVerifier);
      
        let args:URLSearchParams = new URLSearchParams({
          response_type: 'code',
          client_id: clientId,
          scope: scope,
          redirect_uri: redirectUri,
          state: state,
          code_challenge_method: 'S256',
          code_challenge: codeChallenge
        });
      
        window.location.href = ('https://accounts.spotify.com/authorize?' + args) ;
      });
}

const nullToEmpty = (str:string|null):string =>{
    return str === null ? '' : str;
}

export const getProfile = async():Promise<Array<string>>=> {
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    return [data.id,data.display_name,data.images[0].url]
  }

  export const getArtist = async(id:string):Promise<Array<string>>=> {
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/artists/'+{id}, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    return [data.id,data.display_name,data.images[0].url]
  }


const playListCall = async (id:string,accessToken:string|null ):Promise<playlist[]> => {
  let i=0;
  let playlists:Array<playlist>=[]
  for(i;i< 5;i++){
    const response = await fetch('https://api.spotify.com/v1/users/'+id+'/playlists?limit=50&offset='+(i*50), {
      headers: {
        Authorization: 'Bearer ' + accessToken
    }});
      const json = await response.json()
      const songRegex =/Your Top Songs/igm
      const yearRegex = /\d{4}/gm
      json.items.forEach((obj:any) => {
        if (obj.name.match(songRegex) && obj.owner.id === 'spotify'){
          const id:string = obj.id
          const year:string = obj.name.match(yearRegex)[0]
          playlists.push(
            {id:id,year:year} 
          );
        }
      })
      if(json.items.length < 50){break;}
    }
    console.log(playlists)
    return playlists
 };

 const getExplicit = (tracks:any):Array<string|number> =>{
  const trx = [];
  let angry=0;
  let year = '';
  let t = 0;
  for(t;t<tracks.length;t++){
    if (tracks[t].explicit>= angry){
      angry = tracks[t].explicit
      year = tracks[t].year
    }
    trx.push([tracks[t].year,tracks[t].explicit])
  }
  return [year,angry]
 }

const getCounts = (years:any)=>{
  let artistCounter:any = {}
  // Name of Artist, Number of Unique SOngs, percent of repeats?
  let topArist=['',0]
  
  let songCounter:any = {}
  // Name of Song, Name of Artist(s),
  let topSong =['',0]
  
  const uniqueSongs = new Set();

  // Loop through all years
  for (let i=0;i<years.length;i++){
    let year = years[i].year
    let cur =years[i].tracks
    for (let j=0;j<cur.length;j++){
      let item = cur[j]

      if(songCounter[item.name] ===undefined){
        songCounter[item.name] = 0
      }
      songCounter[item.name] += 1

      item.artists.forEach((artist:any) =>{
        if(artistCounter[artist.name] ===undefined){
          artistCounter[artist.name] = 0
        }
       
        if(!uniqueSongs.has(item.id)){
          //Handle multi artist case
          artistCounter[artist.name] += 1
          if(artistCounter[artist.name]>topArist[1]){
            topArist = [artist.name,artistCounter[artist.name]]
          }
        }
      })
      uniqueSongs.add(item.id)
    }
  }
  let countCounts = new Array(years.length).fill(0);
  for (const key in songCounter) {
    countCounts[songCounter[key]] += 1
}
  console.log(countCounts[1]/years.length)
  
  return topArist
}

const getTracks = async(playlists:Array<playlist>,accessToken:string|null) =>{
    let i=0;
    let tracks = [];
    for(i;i< playlists.length;i++){
      const response = await fetch('https://api.spotify.com/v1/playlists/'+playlists[i].id+'/tracks', {
        headers: {
          Authorization: 'Bearer ' + accessToken
      }});
        const json = await response.json()
        let year:string = playlists[i].year;
        let explicit:number=0;
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
        tracks.push({year:year,tracks:songs,explicit:explicit})
  };
  return tracks
}


  export const getPlaylists = async(setName:(s:string)=>void,setPhoto:(s:string)=>void,setYears:(n:number)=>void,setExplicit:(a:Array<string|number>)=>void,setTopArist:(a:Array<string|number>)=>void,setTopAlbum:(a:Array<string|number>)=>void)=> {
    const  [id,name,photo] = await getProfile()
    setName(name)
    setPhoto(photo)
    console.log(id,name,photo)
    let accessToken = localStorage.getItem('access_token');
    let now = Date.now()
    const playlists =  await playListCall(id,accessToken)

    setYears(playlists.length)
    const tracks = await getTracks(playlists,accessToken)
    const explicit = getExplicit(tracks)
    const counts = getCounts(tracks)
    console.log(counts)
    setTopArist(counts)
    setExplicit(explicit)
    let later = Date.now()
    console.log(later-now)
    return [name,photo,tracks]
  }


export const callback = async () =>{
    const urlParams:URLSearchParams = new URLSearchParams(window.location.search);

    let code:string = nullToEmpty(urlParams.get('code')) 
        

    let codeVerifier2:string|undefined = nullToEmpty(localStorage.getItem('code_verifier'));

    let body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier2
    });

    const response = fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('access_token', data.access_token);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

