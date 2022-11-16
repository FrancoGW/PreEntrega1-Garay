import Nav from "./componentes/NavBar/Nav"
import './App.css';
import SearchBar from "./componentes/Search/SearchBar.js"
import Stock from "./componentes/stock/Stock.js"
import {useState, useEffect} from 'react';
import {getPokemonData,getPokemons, searchPokemons} from './componentes/Api.js';
import Footer from './componentes/footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesProvider } from "./contexts/favoritesContext";
import Pokeinfo from "./componentes/Pokemon/Pokeinfo";


function App() {
  const localStorageKey = "favorite_pokemons";

  const [pokemons , setPokemons] = useState([])
  const [page,setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading ]= useState(true);
  const [favorites , setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);


  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(25 , 25 * page );
     
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count/25))
      setNotFound(false)
    }catch(err){

    }
  }
  const loadFavoritesPokemons = () =>{
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons)
  }
  useEffect(()=>{
    loadFavoritesPokemons();
  },[]);

  useEffect(() => {
    if(!searching){

      fetchPokemons();
    }
  },[page])
  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >= 0){
      updated.splice(isFavorite, 1)
    }else{
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
  }
  const onSearch = async (pokemon)=>{
    if(!pokemon){
        return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)
    setSearching(true)
    const result = await searchPokemons(pokemon);
    if(!result){
      setNotFound(true);
      setLoading(false)
      return;
    }else{
      setPokemons([result]);
      setPage(0)
      setTotal(1)
    }
    setLoading(false)
    setSearching(false)
  };
  return (
    <FavoritesProvider value={{
    favoritePokemons: favorites,
    updateFavoritepokemons:updateFavoritePokemons 
    }}>
    <div className="App">
      <header className="App-header">       
        <Nav/>
      </header>
      <main>
      <SearchBar onSearch={onSearch}/>
      { notFound ?
        <div> <h1 className="h1Home">No se encontro tu pokemon 🥺</h1></div>
      :
        <Stock 
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
        }  
         
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </FavoritesProvider>
  );
}

export default App;
