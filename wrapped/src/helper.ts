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

export const getProfile = async():Promise<string>=> {
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    return (data.id)
  }

  export const getPlaylists = async()=> {
    const  id = await getProfile()
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/users/'+id+'/playlists?limit=50', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();

    const test = data.items.forEach((obj:any)=>{
      if (obj.name.includes('Your Top Songs')){
        console.log(obj.name)}
    })
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
    console.log(localStorage.getItem('access_token'))
}

