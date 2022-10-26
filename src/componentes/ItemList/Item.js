import React from 'react'
import MyButton from '../MyButton/MyButton'

function Item(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <img src={props.imgurl} alt={props.title} />
        <p>${props.price}</p>
        <MyButton text="Ver mas"/>
        
    </div>
  )
}

export default Item