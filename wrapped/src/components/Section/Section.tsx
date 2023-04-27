import React from 'react'
import './styles.css';

export type body = {
    title:string;

}
export type SectionProps = {
    justify?: 'left' | 'right'| 'center';
    backgroundColor?:string;
    title?:string;
    share?:boolean;
    position: string;
    id: 'layer0'|'layer1' | 'layer2' | 'layer3' | 'layer4'
}

const Section = (props:SectionProps) =>{

    return(
        <>
        <div className= {"section "} style ={{'backgroundColor': props.backgroundColor,
          'justifyContent':props.justify,
          'top':props.position}}>
            <div className={"spacer-top "+props.id}></div>
 
            <h1>
                {props.title}
            </h1>
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
