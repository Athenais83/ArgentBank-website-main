import logo from './logo.svg';
import '../src/App.css';
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './pages/AppRouter';
import './pages/Home';

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
