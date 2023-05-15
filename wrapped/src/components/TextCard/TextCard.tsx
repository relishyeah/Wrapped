import './styles.css'

type textCardProps={
  topSong?:(string|number)[];
  topArtist?:(string|number)[];
  topAlbum?:(string|number)[];
  title:string | undefined;
}


export const TextCard = (props:textCardProps) => {
 
 const halo = 
 <svg className='halo' width="11.5vh" height="11.5vh" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="65" cy="65" r="63" stroke="#fff" strokeWidth="4"/>
 </svg>
 
 
  
  const handleProps = (type:any,props:(string|number)[]) =>{

    return <>
      <div className="leftSide">
        {(type==='topSong' || type=='topArtist') && halo}
        {type=='topSong' && <img style={{clipPath: 'circle()'}} src={props[4] as string} />}
        {type=='topArtist' && <img style={{clipPath: 'circle()'}} src={props[3] as string} />}

      </div>
      <div className="sideText">
        <div className='largeText'>
            {type==='topSong' && props[1]} 
            {type==='topArtist' && props[4]} 
        </div>
        {type==='topSong' &&   <div className='artistName'>{props[5]} </div>}
        <div className="factHolder">
          <div className="fact">
            <div className="large">
              {type==='topSong' &&   props[0]}
              {type==='topArtist' &&  props[1]}
            </div>
            <div className="yearsText">
              {type==='topSong' &&   'years in wrapped'}
              {type==='topArtist' &&  'unique songs'}
            </div>
          </div>
          <div className="fact">
            <div className="large">
            {type==='topSong' &&   props[3]}
            {type==='topArtist' &&  props[2] }
            </div>
            <div className="yearsText">
              {type==='topSong' &&   'average rank'}
              {type==='topArtist' &&  'total songs'}
            </div>
          </div>
        </div>
      </div>
     

    </>
    };
  
  return (
    <>
      <div className="sectionTitle">{props.title}</div>
      {(props.topSong || props.topArtist) && <div className="textContainer">
        
        
        {props.topSong &&handleProps('topSong',props.topSong)} 
        {props.topArtist &&handleProps('topArtist',props.topArtist)} 
      </div>}

      {props.topAlbum &&<div className='albums'>
        {props.topAlbum && 
        Object.keys(props.topAlbum).map((item,idx) =>{
          return <div className='album' key={idx}>
          <img  src={item as string}/>
          <div  className='yearsText'>{props.topAlbum && Object.values(props.topAlbum)[idx]} songs </div>
          </div>
        })}
      </div>}
    </>
  )
}
