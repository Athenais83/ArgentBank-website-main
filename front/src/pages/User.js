import React from 'react';
import Footer from "../components/Footer";
import HeaderUser from '../components/HeaderUser';
import MenuUser from '../components/MenuUser';
import Accounts from '../components/Accounts';

function User (){
    return(
        <>
        <HeaderUser/>
        <MenuUser/>
        <Accounts/>
        <Footer />
        </>
    )
}

export default User;


