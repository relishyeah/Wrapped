import React from 'react'
import {Header} from '../Header/Header'
import {Years} from '../Years/Years'
import './styles.css';

export type SectionProps = {
    justify?: 'left' | 'right'| 'center';
    backgroundColor?:string;
    title?:string;
    share?:boolean;
    position: string;
    id: 'layer0'|'layer1' | 'layer2' | 'layer3' | 'layer4'
    child?: React.FC;
    name?: string;
    photo?:string;
    years?:number;
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
            {props.name &&props.photo &&
            <Header name={props.name} photo={props.photo}/> }
            {props.years && <Years years={props.years}/>}
        </div>

        
    </>
        
    )
}

export default Section
