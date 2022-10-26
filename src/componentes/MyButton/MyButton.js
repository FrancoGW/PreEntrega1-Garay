import React from 'react'
import './Style.css'

const MyButton = (props) => {
  console.log(props)

  const Styles2 = {backgroundColor: props.color} 


  return (
    <>
        <button style={Styles2} className='btn'>
          {props.text}
        </button>
    </>
  )
}

export default MyButton