import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletters from './components/Newsletters';
import Footer from './components/Footer.jsx';
import Purchases from './pages/Purchases.jsx';



function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/shop' Component={Shop}/>
          <Route path='/blog' Component={Blog}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/perchases' Component={Purchases} className='purchases-icon'/>
        </Routes>
        <Newsletters/>
        <Footer/>
    </Router>
    </>
  )
}

export default App
