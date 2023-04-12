import React from 'react';
import './styles.css';

const Welcome = () => {
    return (
    <div className='container'>
        <div className="title">
            Wrapped,<br/>Wrapped
        </div>
        <div className="content">
            

            <div className="box-top">
                <svg width="593" height="297" viewBox="0 0 593 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_385)">
                    <path d="M55 135C55 132.791 56.7909 131 59 131H534C536.209 131 538 132.791 538 135V234C538 236.209 536.209 238 534 238H59C56.7909 238 55 236.209 55 234V135Z" fill="#3B37CA"/>
                    </g>
                    <path d="M302.914 121.018C393.319 124.862 492.093 92.2163 461.265 38.3154C430.437 -15.5855 337.928 40.142 302.914 121.018Z" stroke="#DADBDD" stroke-width="30"/>
                    <path d="M290.465 121.018C200.06 124.862 101.286 92.2163 132.114 38.3154C162.941 -15.5855 255.451 40.142 290.465 121.018Z" stroke="#DADBDD" stroke-width="30"/>
                    <path d="M327.999 132L328 238L266 238L266 132L327.999 132Z" fill="#DADBDD"/>
                    <defs>
                    <filter id="filter0_d_11_385" x="0" y="80" width="593" height="217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="27.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_385"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_385" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </div>
            <div className="spotify">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
                    <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
                </svg>
            </div>
            <div className="box-bottom">
                <svg width="459" height="289" viewBox="0 0 459 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="459" height="289" rx="4" fill="#3B37CA"/>
                    <path d="M260.999 0L261 289L199 289L199 1.68077e-06L260.999 0Z" fill="#DADBDD"/>
                </svg>
            </div>
        

            
            
            
            <div className="tagline">
                Unwrap your listening, year by year
            </div>
            

            <div onClick={() => console.log(123)} className='logIn'>
                    See yours
            </div>
            
        </div>

    </div>  );
}
 
export default Welcome;