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


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/redux/reducers';
import { loginMiddleware } from '../src/redux/middleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: [loginMiddleware],
});

function App(){
    return(
        <Provider store={store}>
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
        </Provider>
    )
}

export default App;
