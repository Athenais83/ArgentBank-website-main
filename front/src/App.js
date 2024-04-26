import logo from './logo.svg';
import '../src/App.css';
import '../src/sass/_app.scss';
import React from 'react';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';

import '../src/pages/AppRouter';
import '../src/pages/Home';
import '../src/pages/Login';
import '../src/pages/User';


function App(){
    return(
        <>
        <div>
            <Header/>
            <Menu/>
        </div>
        <div>
            <Banner/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}

export default App;
