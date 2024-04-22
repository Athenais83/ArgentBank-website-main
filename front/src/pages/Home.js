import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Features from '../components/Features';

function Home (){
    return(
        <body>
            <Header />
            <Banner />
            <Features/>
            <Footer />
        </body>
    )
}

export default Home;