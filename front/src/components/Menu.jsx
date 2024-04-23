import React from 'react';
import "../App";

function Menu (){
    return(
        <nav class="main-nav">
        <a class="main-nav-logo" href="Home.js">
          <img
            class="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href="Login.js">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    )
}

export default Menu; 