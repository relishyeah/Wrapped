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
    explicit?:Array<any>;
    topArtist?:Array<number|string>;
    topAlbum?:Array<number|string>;

}

const Section = (props:SectionProps) =>{

    return(
        <>
        <div className= {"section "} 
            style ={{'backgroundColor': props.backgroundColor,
          'justifyContent':props.justify,
          'top':props.position}}
          onClick={() => console.log(13)}>
            <div className={"spacer-top "+props.id}></div>

            {props.about && <a href='https://www.quinnrelyea.com'>quinnrelyea.com </a>}
            {props.name &&props.photo &&
            <Header name={props.name} photo={props.photo}/> }

            {props.years && <Years years={props.years}/>}

            {props.explicit && <TextCard explicit={props.explicit} />}

            {props.topArtist && <TextCard topArtist={props.topArtist} />}
        </div>

        
    </>
        
    )
}

export default Section
