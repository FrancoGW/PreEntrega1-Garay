import './Style.css'
import { useContext } from 'react';
import FavoriteContext from '../../contexts/favoritesContext';

const Pokeinfo = (props) => {
  const { pokemon } = props;
  const {favoritePokemons, updateFavoritepokemons} = useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const clickHeart = (e) =>{
      e.preventDefault();
      updateFavoritepokemons(pokemon.name);
  }
  
  
  return (
    
      <div className="card">
        
        <div className='favorito'>
          <button className='btn-3' onClick={clickHeart}>

         {heart}
          </button>
        </div>
            <div className="pokemon-img">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div>
            <h3>{pokemon.name}</h3>
            <p>#{pokemon.id}</p>
            </div>
            <div>
            {pokemon.types.map((type, idx) => {
                return <div  key={idx}>{type.name}</div>;
                
            })}
            </div>
            
         
            
      </div>
   
  );
};

export default Pokeinfo;
