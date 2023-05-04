import React from 'react'
import './styles.css'

export const Header = (props:any) => {
  return (
    <>
      <div className="photo">
        <img src={props.photo} />
      </div>
      <div className="headerTitle">
        <h4>{props.name + "'s"}</h4>
        <h4>Wrapped, Wrapped </h4>
      </div>
      
      
    </>
  )
}