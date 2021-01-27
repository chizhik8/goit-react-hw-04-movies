import React from 'react';
import { NavLink } from 'react-router-dom'
import routes from '../routes';

export default function Navigation() {
    return (
        <div>
        <ul className='NavLinkList'>
             <li className='NavLinkItem'> <NavLink exact to={ routes.home} className='NavLink' activeClassName='NavLinkActive'>Home</NavLink> </li>
            <li className='NavLinkItem'> <NavLink exact to={ routes.movies} className='NavLink' activeClassName='NavLinkActive'>Movies</NavLink> </li>
        </ul>
        </div>
    )
};
