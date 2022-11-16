import React from 'react'
import Pokemon from "../Pokemon/Pokemon.js"
import Paginas from '../pagination/Pagination.js';

import "./Style.css"
function Stock(props) {
    const {pokemons, page , setPage, total , loading} = props;
    
  const lastPage = () =>{
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage)
  }
  const nextPage = () =>{
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage)
  }
  
  return (
    <div className='container'>
    
         <div className='headerStock'>
           <h1 className='titleMain'>Stock</h1>
           <Paginas
           page={page + 1}
           totalPages={total}
           onLeftClick={lastPage}
           onRightClick={nextPage}

           />
        </div>
      {loading?
      <div className='cargando'>Cargando..</div>
      :
        <div className='contentStock'>
            {pokemons.map((pokemon,idx)=>{
                return(
                    <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    
                )
                
            })}
           
        </div>
  }
    </div>
  )
}

export default Stock
