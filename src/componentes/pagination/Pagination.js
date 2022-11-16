import React from 'react'
import "./Style.css"
function Paginas (props) {

    const {onLeftClick, onRightClick, page , totalPages} = props;

  return (
    <div className='contentPagination'>
        <button onClick={onLeftClick}>Atras</button>
        <div className='color'>{page} de {totalPages}</div>
        <button onClick={onRightClick}>Adelante</button>

    </div>
  )
}

export default Paginas