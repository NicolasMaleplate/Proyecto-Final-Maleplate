import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';

const NavBar = (props) => {
    return (
        <div className='barraSup'>
            <ul className='nav'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Producto</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Carrito</a></li>
            </ul>
            <CardWidget />
        </div>     
    );
   
}
export default NavBar;