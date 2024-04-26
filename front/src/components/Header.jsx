import React from 'react';
import Menu from './Menu';
import '../App';
import '../sass/_main.scss';
import '../sass/_header.scss'

function Header(){
    return(
        <header>
            <Menu />
        </header>
    )
}

export default Header