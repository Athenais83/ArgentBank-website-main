import React from 'react';
import "../App";
import { Link, useLocation } from 'react-router-dom';
import '../sass/_header.scss'
import argentBankLogo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';


function Menu (){
  const location = useLocation();
    return(
        <>
        <nav className='main-nav'>  
        <Link to="/" className={location.pathname=== '/' ? 'main-nav-logo' : 'link active'}>Home</Link>
          <img
            class="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
          <Link to="/Login" className={location.pathname==='/Login' ? 'main-nav-item' : 'link active'}>Sign in</Link>
            <i class="fa fa-user-circle"></i>
            <FontAwesomeIcon icon={faCircleUser} />
      </nav>
      </>
      
    )
}

export default Menu; 