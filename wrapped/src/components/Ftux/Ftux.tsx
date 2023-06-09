import './styles.css';

const Ftux = () => {
    const images = ['https://lineup-images.scdn.co/your-top-songs-2016_LARGE-en.jpg','https://lineup-images.scdn.co/your-top-songs-2017_LARGE-en.jpg', 'https://lineup-images.scdn.co/your-top-songs-2018_LARGE-en.jpg', 'https://lineup-images.scdn.co/your-top-songs-2019_LARGE-en.jpg', 'https://lineup-images.scdn.co/wrapped-2020-top100_LARGE-en.jpg','https://lineup-images.scdn.co/wrapped-2021-top100_LARGE-en.jpg','https://wrapped-images.spotifycdn.com/image/yts-2022/large/your-top-songs-2022_large_en.jpg']

    return (
        <div className='textBox'>
            Make sure to follow all of your Wrapped Playlist
           <div className="carousel">
           {images.map((obj,idx)=>{
                return <img key={idx}  src={obj} />
            })}
           </div>
            
        </div>
  )
}

export default Ftux