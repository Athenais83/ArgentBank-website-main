import logo from './logo.svg';
import '../src/App.css';
import React from 'react';
import Header from 'src/components/Header';
import Banner from 'src/components/Banner';
import Footer from 'src/components/Footer';
import Menu from './components/Menu';
import 'src/AppRouter';
import 'src/pages/Home';

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

export default App
