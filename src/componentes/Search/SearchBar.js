import { searchPokemons } from '../Api';
import React,{useState} from 'react'
import "./Style.css"
const SearchBar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');

    const onChange = (e) =>{
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            setSearch(null)
        }
    }
    const onClick = async (e) =>{
      onSearch(search)
        
    }
  return (
    <div className='searchBar'>
    
        <div>
            <input placeholder='Busca un pokemon!' onChange={onChange}/>
            
        </div>
        <div>
            <button onClick={onClick}>Buscar</button>
        </div>
        <div>
           
        </div>

    </div>
  )
}

export default SearchBar