import React from 'react'
import Menu from './Menu'
import '../App'
import 'src/sass/_header.scss'

function Header(){
    return(
        <section className='header'>
            <img src="./img/argentBankLogo.png" alt='argent-bank' className='logo-argent-bank'/>
            <Menu />
        </section>
    )
}

export default Header