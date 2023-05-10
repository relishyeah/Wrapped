import './styles.css'

type textCardProps={
  topSong?:(string|number)[];
  topArtist?:(string|number)[];
  topAlbum?:(string|number)[];
}


export const TextCard = (props:textCardProps) => {
 
 const halo = 
 <svg className='halo' width="11.5vh" height="11.5vh" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="65" cy="65" r="63" stroke="#fff" strokeWidth="4"/>
 </svg>
 
 
  const crown = 
 <svg className='crown' width="7vh" height="7vh" viewBox="0 0 75 73" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M19.9809 58.0941C19.7048 57.6158 19.8687 57.0042 20.347 56.728L62.3358 32.4858C62.8141 32.2096 63.4257 32.3735 63.7018 32.8518L70.5691 44.7463C70.8437 45.2218 70.6834 45.8298 70.2101 46.1082L47.1313 59.6838L28.2065 70.3611C27.7289 70.6305 27.1233 70.465 26.8491 69.9901L19.9809 58.0941Z" fill="#D9D9D9"/>
 <path d="M47.6916 5.12118L64.7225 34.6196L50.5001 42.8309L47.6916 5.12118Z" fill="#D9D9D9"/>
 <path d="M25.0842 15.9043L56.0064 40.217L30.7345 56.0427L25.0842 15.9043Z" fill="#D9D9D9"/>
 <path d="M3.05836 28.7829L21.3058 60.3884L35.0015 52.4812L3.05836 28.7829Z" fill="#D9D9D9"/>
 <path d="M7.74845 27.7595C8.69862 29.4052 8.13475 31.5096 6.48902 32.4597C4.84329 33.4099 2.73891 32.846 1.78875 31.2003C0.838587 29.5546 1.40245 27.4502 3.04818 26.5C4.69391 25.5499 6.79829 26.1137 7.74845 27.7595Z" fill="#D9D9D9"/>
 <circle cx="47.2927" cy="5.15659" r="3.77485" transform="rotate(-30 47.2927 5.15659)" fill="#D9D9D9"/>
 <circle cx="26.6213" cy="17.286" r="3.64948" transform="rotate(-30 26.6213 17.286)" fill="#D9D9D9"/>
 </svg>
  
  const handleProps = (type:any,props:(string|number)[]) =>{

    return <>
      <div className="leftSide">
        {type=='topArtist' && crown}
        {type==='topSong' && halo}
        {type=='topSong' && <img style={{clipPath: 'circle()'}} src={props[4] as string} />}
        {type=='topArtist' && <img style={{clipPath: 'circle()'}} src={props[3] as string} />}

      </div>
      <div className="sideText">
        <div className='largeText'>
            {type==='topSong' && props[1]} 
            {type==='topArtist' && props[4]} 
        </div>
        {type==='topSong' &&   <div>{props[5]} </div>}
        {type==='topSong' &&   props[0]}
        {type==='topSong' &&   props[3]}
        {type==='topArtist' &&  props[1] }
        {type==='topArtist' &&  props[2] }
      </div>
     

    </>
    };
  
  return (
    <div className='yearsContainer'>
      <div className="textContainer">
        {props.topSong &&handleProps('topSong',props.topSong)} 
        {props.topArtist &&handleProps('topArtist',props.topArtist)} 
      </div>

      <div className='albums'>
        {props.topAlbum && 
        Object.keys(props.topAlbum).map((item,idx) =>{
          return <div className='album' key={idx}>
          <div  className='albumText'>{props.topAlbum && Object.values(props.topAlbum)[idx]} songs </div>
          <img  src={item as string}/>
          </div>
        })}
      </div>
    </div>
  )
}
