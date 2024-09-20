import React from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './styles/App.css';

Function App() {
    return(
        <div className='container'>
            <Aside />
            <Footer />
            <Header />
            <Main />
            <Nav />
        </div>
    )
}