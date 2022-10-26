import { CardWidget } from "../CardWidget/CardWidget"
import "./Style.css"


function Nav() {
  return (
    <div className="contentAllNav">
        <img src="../img/logo192.png" className="App-logo" alt="logo" />
        <ul className="contentNav">
            <li className="item">INICIO</li>
            <li className="item">PRODUCTOS</li>
            <li className="item">CONTACTO</li>
        </ul>
        <CardWidget className="carrito"/>
    </div>
  )
}

export default Nav