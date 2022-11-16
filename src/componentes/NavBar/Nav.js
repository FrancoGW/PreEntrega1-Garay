import React from "react"
import { CardWidget } from "../CardWidget/CardWidget"
import FavoriteContext from "../../contexts/favoritesContext";
import "./Style.css"
import {useContext} from "react"



function Nav() {
  const {favoritePokemons} = useContext(FavoriteContext);
  return (
    <div className="contentAllNav">
        <img src="../img/Shop.png" className="App-logo" alt="logo" />
        <ul className="contentNav">
            <li className="item"><a href="/app.js">INICIO</a> </li>
        </ul>
        <CardWidget className="carrito"/>
        <div>&#10084;&#65039;{favoritePokemons.length}</div>
    </div>
  )
}

export default Nav