import React from 'react';
import "../App";
import { Link, useLocation } from 'react-router-dom';
import '../sass/_header.scss'

function Menu (){
  const location = useLocation();
    return(
        <>
        <nav className='main-nav'>  
        <Link to="/" className={location.pathname=== '/' ? 'main-nav-logo' : 'link active'}>Home</Link>
          <img
            class="main-nav-logo-image"
            src="../img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
          <Link to="/Login" className={location.pathname==='/Login' ? 'main-nav-item' : 'link active'}>Sign in</Link>
            <i class="fa fa-user-circle"></i>
      </nav>
      </>
      
    )
}

export default Menu; 