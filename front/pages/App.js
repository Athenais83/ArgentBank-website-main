import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Form from '../components/Form';
import '../pages/AppRouter';
import '../pages/Home';

function App(){
    return(
        <>
        <div>
            <Header/>
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