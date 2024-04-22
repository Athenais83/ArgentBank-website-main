import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

const AppRouter = () =>{
    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login" element={<Login />}/>
        </Routes>
    </Router>
    </div>
    )
}

export default AppRouter