import React from 'react';
import Footer from "../components/Footer";
import HeaderUser from '../components/HeaderUser';
import Accounts from '../components/Accounts';
import NameUser from '../components/NameUser';

function User (){
    return(
        <body>
            <HeaderUser/>
            <NameUser />
            <Accounts/>
            <Footer />
        </body>
    )
}

export default User;


