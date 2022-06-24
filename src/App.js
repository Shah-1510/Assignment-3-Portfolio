import './App.css';
import React from "react";
import {Helmet} from "react-helmet";
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Scroll from './Pages/Scroll';

function App() {
  return (
    <>
    <Helmet>
        <script src="./Assets/app.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="https://kit.fontawesome.com/a54d2cbf95.js"></script>
        <script src="https://kit.fontawesome.com/c4254e24a8.js" crossorigin="anonymous"></script>
    </Helmet>
    <Navbar />
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <Scroll/>
    </>
  );
}

export default App;
