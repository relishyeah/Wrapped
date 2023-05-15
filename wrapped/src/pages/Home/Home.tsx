import './styles.css';
import Loading from '../../components/Loading/Loading';
import Section from '../../components/Section/Section';

const Home = (props:any) => {

  const start = ['78vh','82vh','86vh','90vh', '94vh','96vh']
  const finish = ['0vh','16vh','37vh','58vh', '79vh','100vh']


  return (
    <div className='content'>
      <Loading loggedIn={props.loggedIn} setLoading={props.setLoading}/>
      
      <Section 
      className={props.className}
      backgroundColor='#1515A3'
      justify='left'  
      position={props.loading?start[0]:finish[0]} 
      id='layer0'
      name={props.name}
      photo={props.photo}
      loading={props.loading}/>

      <Section 
      className={props.className}
      backgroundColor='#2A27B6' 
      justify='left'   
      position={props.loading?start[1]:finish[1]} 
      id='layer1'  
      years={props.years} 
      loading={props.loading} />

      <Section 
      className={props.className}
      backgroundColor='#3B37CA' 
      justify='left'   
      position={props.loading?start[2]:finish[2]} 
      id='layer2' 
      topSong={props.topSong} 
      loading={props.loading} 
      title='Top Song'/>

      <Section 
      className={props.className}
      backgroundColor='#4A47DE' 
      justify='left'   
      position={props.loading?start[3]:finish[3]} 
      id='layer3' 
      topArtist={props.topArtist} 
      loading={props.loading} 
      title='Top Artist'/>

      <Section 
      className={props.className}
      backgroundColor='#5857F3' 
      justify='center'   
      position={props.loading?start[4]:finish[4]} 
      id='layer4' 
      topAlbum={props.topAlbum} 
      loading={props.loading} 
      title='Top Albums'/>

    <Section 
    backgroundColor='#6b6bfe'
      position={props.loading?start[5]:finish[5]} 
      id='layer5'
      loading={props.loading}
      about
      justify='center'
    />

    </div>
    
    
  )
}

export default Home