import React from 'react'
import './styles.css'
export const Header = (props:any) => {
  return (
    <>
      <div className="photo">
        <svg className='bow' width="94" height="43" viewBox="0 0 94 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_119_200)">
        <path d="M48.4492 31.376C69.4977 32.3725 92.4945 23.9086 85.3171 9.93393C78.1397 -4.04077 56.6012 10.4075 48.4492 31.376Z" stroke="#DADBDD" strokeWidth="6"/>
        <path d="M45.5508 31.376C24.5023 32.3725 1.5055 23.9086 8.6829 9.93393C15.8603 -4.04077 37.3988 10.4075 45.5508 31.376Z" stroke="#DADBDD" strokeWidth="6"/>
        </g>
        <defs>
        <filter id="filter0_d_119_200" x="0.40921" y="1.33228" width="93.1815" height="41.1882" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_200"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_200" result="shape"/>
        </filter>
        </defs>
        </svg>
        <img style={{clipPath: 'circle()'}} src={props.photo} />
      </div>
      <div className="headerTitle">
        <h4>{props.name + "'s"}</h4>
        <h4>Wrapped, Wrapped </h4>
      </div>
      
      
    </>
  )
}