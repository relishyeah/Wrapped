import './styles.css'

type textCardProps={
  topSong?:(string|number)[];
  topArtist?:(string|number)[];
  topAlbum?:(string|number)[];
}


export const TextCard = (props:textCardProps) => {
 
  
  const handleProps = (type:any,props:(string|number)[]) =>{

    return <>
      <div className="leftSide">
        <div className='largeText'>
          {type==='topSong' && props[0]} 
          {type==='topArtist' && props[1]} 
        </div>
        {type=='topSong' && <img style={{clipPath: 'circle()'}} src={props[3] as string} />}
        {type=='topArtist' && <img style={{clipPath: 'circle()'}} src={props[2] as string} />}

      </div>
      <div className="sideText">
        {type==='topSong' && 'different years '+ props[1] + ' by ' + props[4] +' was in your top songs'}
        {type==='topArtist' && 'unique songs by '+ props[3] + ", ain't that sweet"}
      </div>

      {type==='topAlbums' && props.map((item,idx) =>{
        return <img key={idx} src={item as string}/>
      })}

    </>
    };
  

  
  return (
    <div className='yearsContainer'>
    <div className="textContainer">
      {props.topSong &&handleProps('topSong',props.topSong)} 
      {props.topArtist &&handleProps('topArtist',props.topArtist)} 
      {props.topAlbum && handleProps('topAlbums', Object.keys(props.topAlbum))}
      
      </div>

    </div>
    
  )
}
