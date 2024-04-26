import React from"react";
import '../sass/_menuUser.scss'

function MenuUser (){
    return(

      <nav className="main-nav">
      <a className="main-nav-logo" href="/Home">
        <img
          className="main-nav-logo-image"
          src="../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/Login">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="/Home">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
    )
}

export default MenuUser;

