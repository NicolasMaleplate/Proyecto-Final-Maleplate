import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Producto</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Carrito</a></li>
            </ul>
        </div>
    );
}

export default NavBar;