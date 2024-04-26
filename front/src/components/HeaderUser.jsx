import React from "react";
import '../sass/_headerUser.scss'
import MenuUser from "./MenuUser";


function HeaderUser (){
    return(
       <section className='header'>
       <img src="./src/img/argentBankLogo.png" alt='argent-bank' className='logo-argent-bank'/>
       <MenuUser />
   </section>
    )
}

export default HeaderUser;