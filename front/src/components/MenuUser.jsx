import React from"react";

function MenuUser (){
    return(

        <nav class="main-nav">
      <a class="main-nav-logo" href="./src/pages/Home.js">
        <img
          class="main-nav-logo-image"
          src="../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./src.pages/Login.js">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="./src/pages/Home.js">
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
    )
}

export default MenuUser;

