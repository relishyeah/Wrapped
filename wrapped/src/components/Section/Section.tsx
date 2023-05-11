import React from 'react'
import {Header} from '../Header/Header'
import {Years} from '../Years/Years'
import { TextCard } from '../TextCard/TextCard';
import './styles.css';

export type SectionProps = {
    justify?: 'left' | 'right'| 'center';
    backgroundColor?:string;
    about?:boolean;
    share?:boolean;
    position: string;
    id: 'layer0'|'layer1' | 'layer2' | 'layer3' | 'layer4'
    child?: React.FC;
    name?: string;
    photo?:string;
    years?:number;
    title?:string;
    topArtist?:Array<number|string>;
    topAlbum?:Array<number|string>;
    topSong?:Array<number|string>;
    loading:boolean;
    className?:string;
}

const Section = (props:SectionProps) =>{

    return(
        <>
        <div className= 'section' 
            style ={{'backgroundColor': props.backgroundColor,
            'justifyContent':props.justify,
            'top':props.position,
            'height':props.name?'16vh':'21vh',
            'alignItems':props.name?'end':'center'
        }}>
            <div className={"spacer-top "+props.id}></div>
            
            <div className={props.className}>
                {props.title && 
                <div className="title ">{props.title}</div>
                }
                {props.about && <a href='https://www.quinnrelyea.com'>quinnrelyea.com </a>}
                {props.name &&props.photo &&
                <Header className='noShow' name={props.name} photo={props.photo}/> }

                {props.years && <Years years={props.years}/>}

                {props.topSong && <TextCard topSong={props.topSong} />}

                {props.topArtist && <TextCard topArtist={props.topArtist} />}

                {props.topAlbum && <TextCard topAlbum={props.topAlbum} />}
            </div>
            
        </div>

        
    </>
        
    )
}

export default Section
