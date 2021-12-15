import React from 'react'

import Home from '../views/home/Home'
import About from '../views/home/about/About'
import Page2 from '../views/home/about/Page2';
import Page1 from '../views/home/about/Page1';
import Page3 from '../views/home/about/Page3';


import { Routes,Route,link } from 'react-router';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="Page1" element={<Page1/>}/>
                <Route path="Page2" element={<Page2/>}/>
                <Route path="Page3" element={<Page3/>}/>
            </Routes>
            
        </>
    )
}

export default Routing;