import React, {useState} from 'react'
import './Style.css'
import MyButton from '../MyButton/MyButton'
function ItemCount(props) {
    
    let [count,setCount] = React.useState(0)

    function handleClickAdd(){
        setCount(count+1)
    }
    
        
        function handleClickRes(){
            if(count >= 1 ){
                setCount(count-1)
            }
        }
    
    
  return (
    <div>
        
        <div className="contentButton">
            <MyButton className='btn2' onClick={handleClickRes} >
            -
            </MyButton>
            <span>{count}</span>
            <MyButton className='btn2' onClick={handleClickAdd} >
            +
            </MyButton>
        </div>
        <div className="contentAdd">
            <MyButton className='btn3'>Añadir al Carrito</MyButton>
        </div>
    
        

    </div>
  )
}

export default ItemCount