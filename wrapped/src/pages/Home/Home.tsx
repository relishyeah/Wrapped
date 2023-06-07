import './styles.css';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux'

import Loading from '../../components/Loading/Loading';
import Section from '../../components/Section/Section';

const Home = (props:any) => {
  const loading:boolean = useSelector((state: RootState) => state.loading.value)
  const loggedIn:boolean = useSelector((state: RootState) => state.loggedIn.value)


  const start = ['78svh','82svh','86svh','90svh', '94svh','96svh']
  const finish = ['-2svh','16svh','37svh','58svh', '79svh','100svh']


  return (
    <div className='content'>
      <Loading />
      
      <Section 
      backgroundColor='#4d49e1'
      justify='left'  
      position={(loggedIn && !loading) ?finish[0]:start[0]} 
      id='layer0'
      name={props.name}
      photo={props.photo}/>

      <Section 
      backgroundColor='#413ccf' 
      justify='left'   
      position={(loggedIn && !loading) ?finish[1]:start[1]} 
      id='layer1'  
      years={props.years} />

      <Section 
      backgroundColor='#352ebe' 
      justify='left'   
      position={(loggedIn && !loading) ?finish[2]:start[2]} 
      id='layer2' 
      topSong={props.topSong}  
      title='Top Song'/>

      <Section 
      backgroundColor='#2820ad' 
      justify='left'   
      position={loggedIn && !loading ?finish[3]:start[3]} 
      id='layer3' 
      topArtist={props.topArtist} 
      title='Top Artist'/>

      <Section 
      backgroundColor='#18119c' 
      justify='center'   
      position={loggedIn && !loading ?finish[4]:start[4]} 
      id='layer4' 
      topAlbum={props.topAlbum} 
      title='Top Albums'/>

    <Section 
      backgroundColor='#00008B'
      position={loggedIn && !loading ?finish[5]:start[5]} 
      id='layer5'
      about
      justify='center'
    />

    </div>
    
    
  )
}

export default Home