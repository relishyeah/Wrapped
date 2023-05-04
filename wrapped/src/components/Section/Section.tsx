import React from 'react'
import {Header} from '../Header/Header'
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
}

const Section = (props:SectionProps) =>{

    return(
        <>
        <div className= {"section "} style ={{'backgroundColor': props.backgroundColor,
          'justifyContent':props.justify,
          'top':props.position}}>
            <div className={"spacer-top "+props.id}></div>
            {props.name &&props.photo &&
            <Header name={props.name} photo={props.photo}/>
            }
            {props.share ?
            <>
            <h2>Share my </h2>
            <select name="" id="languages">
                <option value="">...</option>
            </select>
            <h2>,</h2>
            <select name="" id="languages">
                <option value="">...</option>
            </select>
            <h2>, and</h2>
            <select name="" id="languages">
                <option value="">...</option>
            </select>
            <div className="button">Go</div>
            </>
            : <></>}
        </div>

        
    </>
        
    )
}

export default Section
