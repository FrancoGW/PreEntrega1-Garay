import Nav from "./componentes/NavBar/Nav"
import MyButton from './componentes/MyButton/MyButton';
import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">       
        <Nav/>
      </header>
      <main>
        <MyButton text="1" color="purple"/>
        <MyButton text="2" color="blue"/>
        <MyButton text="3" color="red"/>
        <ItemListContainer greeting="Nuestros Productos"/>
      </main>
      
    </div>
  );
}

export default App;
