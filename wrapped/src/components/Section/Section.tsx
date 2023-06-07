import React from 'react'
import {Header} from '../Header/Header'
import {Years} from '../Years/Years'
import { TextCard } from '../TextCard/TextCard';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export type SectionProps = {
    justify?: 'left' | 'right'| 'center';
    backgroundColor?:string;
    about?:boolean;
    share?:boolean;
    position: string;
    id: 'layer0'|'layer1' | 'layer2' | 'layer3' | 'layer4' | 'layer5'
    child?: React.FC;
    name?: string;
    photo?:string;
    years?:number;
    title?:string;
    topArtist?:Array<number|string>;
    topAlbum?:Array<number|string>;
    topSong?:Array<number|string>;
}


const Section = (props:SectionProps) =>{
    const loading:boolean = useSelector((state: RootState) => state.loading.value)
    const loggedIn:boolean = useSelector((state: RootState) => state.loggedIn.value)

    return(
        <>
        <div className= 'section' 
            style ={{'backgroundColor': props.backgroundColor,
            'justifyContent':props.justify,
            'top':props.position,
            'height':props.name?'18svh':'21svh',
            'alignItems':props.name?'end':'center'
        }}>
            <div className={"spacer-top "+props.id}></div>
            
            <div className={ props.about?"":(loggedIn &&!loading) ? 'normal' : 'hidden'}>
                {props.about && 
                <nav>
                <a  className='abtLink' href='https://www.quinnrelyea.com'>quinnrelyea.com </a>
                <a  className='abtLink' href='https://www.quinnrelyea.com'>about </a>
              </nav>
                }
                {props.name &&props.photo &&
                <Header className='noShow' name={props.name} photo={props.photo}/> }

                {props.years && <Years years={props.years}/>}

                {props.topSong && <TextCard topSong={props.topSong} title={props.title} />}

                {props.topArtist && <TextCard topArtist={props.topArtist} title={props.title} />}

                {props.topAlbum && <TextCard topAlbum={props.topAlbum} title={props.title} />}
            </div>
            
        </div>

        
    </>
        
    )
}

export default Section
