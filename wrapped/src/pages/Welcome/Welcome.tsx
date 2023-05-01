import React, {useState} from 'react';
import './styles.css';

const Welcome = (props:any) => {
    
    const [shake,setShake] = useState(false)

    const openPresent = () => {
        setShake(!shake)
        setTimeout(() => {
            props.setAnimate(true);
          }, 750);
          setTimeout(() => {
            props.setLoggedIn(true);
            props.setPercent(400)
            setTimeout(()=> props.setLoading(false),1000 * 6)
          }, 3000);
    }
    return (
        
       
        <div className="content">
            

            <svg className={props.animate ? "box-top open" : shake ?"box-top shake": "box-top"}viewBox="0 0 483 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 135C0 132.791 1.79086 131 4 131H479C481.209 131 483 132.791 483 135V234C483 236.209 481.209 238 479 238H4.00001C1.79087 238 0 236.209 0 234V135Z" fill="#3B37CA"/>
                <path d="M247.914 121.018C338.319 124.862 437.093 92.2163 406.265 38.3154C375.437 -15.5855 282.928 40.142 247.914 121.018Z" stroke="#DADBDD" stroke-width="30"/>
                <path d="M235.465 121.018C145.06 124.862 46.286 92.2163 77.1136 38.3154C107.941 -15.5855 200.451 40.142 235.465 121.018Z" stroke="#DADBDD" stroke-width="30"/>
                <path d="M272.999 132L273 238L211 238L211 132L272.999 132Z" fill="#DADBDD"/>
            </svg>

           
            <div className="present">
                
                <svg className="box-bottom"
                     viewBox="0 0 482 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" width="459" height="289" rx="4" fill="#3B37CA"/>
                    <g className={props.animate?'noShadow': ''} filter="url(#filter0_d_42_4)">
                    <rect x="272" width="195" height="1" rx="0.5" fill="#3B37CA"/>
                    </g>
                    <g className={props.animate?'noShadow': ''} filter="url(#filter1_d_42_4)">
                    <rect x="14" width="196" height="1" rx="0.5" fill="#3B37CA"/>
                    </g>
                    <path d="M271.999 0L272 289L210 289L210 1.68077e-06L271.999 0Z" fill="#DADBDD"/>
                    <defs>
                    <filter id="filter0_d_42_4" x="268" y="0" width="203" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_4"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_4" result="shape"/>
                    </filter>
                    <filter id="filter1_d_42_4" x="10" y="0" width="204" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_4"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_4" result="shape"/>
                    </filter>
                    </defs>
                </svg>

            
            </div>
            <svg className={props.animate ? "spotify move" : "spotify"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
                    <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
                </svg>

            <div className="tagline">
                Unwrap your listening, year by year
            </div>
            

            <div onClick={() => openPresent() } className='logIn'>
                    See yours
            </div>  
            
        </div> );
}
 
export default Welcome;