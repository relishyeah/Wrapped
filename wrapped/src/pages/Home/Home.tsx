import './styles.css';
import Loading from '../../components/Loading/Loading';
import Section from '../../components/Section/Section';

const Home = (props:any) => {

  const start = ['70vh','73vh','78vh','84vh', '89vh']
  const finish = ['0vh','20vh','40vh','60vh', '80vh']


  return (
    <div className='content'>
      <Loading loggedIn={props.loggedIn} setLoading={props.setLoading}/>
      
      <Section backgroundColor='#1515A3' justify='left' title="Your Top Artists" position={props.loading?start[0]:finish[0]} id='layer0'/>
      <Section backgroundColor='#2A27B6' justify='left' title="Your Top Songs"  position={props.loading?start[1]:finish[1]} id='layer1' />

      <Section backgroundColor='#3B37CA' justify='left' title="Your Top Albums"  position={props.loading?start[2]:finish[2]} id='layer2' />

      <Section backgroundColor='#4A47DE' justify='left' title="Your Top Genres"  position={props.loading?start[3]:finish[3]} id='layer3' />

      <Section backgroundColor='#5857F3' justify='center' title="Share this you luddite"  position={props.loading?start[4]:finish[4]} id='layer4' share={true} />
      
    </div>
    
    
  )
}

export default Home