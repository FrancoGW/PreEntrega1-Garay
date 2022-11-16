import React, {useState} from 'react'
import './Style.css'

const MyButton = (props) => {
  
  let [colorBtn, setColorBtn]= useState("#043d");

  // function handleClick(){
  //   setColorBtn("grey");
  // }


  return (
    <>
        <button onClick={props.onClick} style={{backgroundColor: colorBtn, cursor:"pointer"}} className='btn'>
          {props.children}
        </button>
    </>
  )
}

export default MyButton