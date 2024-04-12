import React from 'react'
import Menu from '../components/Menu'
import '../pages/App'
import '../sass/_header.scss'

function Header(){
    return(
        <section className='header'>
            <img src="" alt='argent-bank' className='logo-argent-bank'/>
            <Menu />
        </section>
    )
}

export default Header