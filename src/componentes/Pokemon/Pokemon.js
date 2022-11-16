import "./Style.css";
import MyButton from "../MyButton/MyButton.js";
import { useContext , useState} from "react";
import FavoriteContext from "../../contexts/favoritesContext";
// import infoPokemon from "./Pokeinfo"
const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritepokemons } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritepokemons(pokemon.name);
  };
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => {
    setIsShow(current => !current);
  };
 
  return (
    <div className="card">
      <div className="favorito">
        <button className="btn-3" onClick={clickHeart}>
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
          return <div key={idx}>{type.name}</div>;
        })}
      </div>
      {isShow && (
      <div className="Hide">
        <ul>
          <li>${pokemon.weight}</li>
          <li>Altura:{pokemon.height}</li>
        </ul>
      </div>
      )}
      <MyButton onClick={handleClick}>ver mas</MyButton>

      <MyButton>añadir al carrito</MyButton>
    </div>
  );
};

export default Pokemon;
