import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import HireMe from './components/HireMe'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Intro />
                            <Skills />
                            <Works />
                            <Contact />
                            <Footer />
                        </>
                    } />
                    <Route path="/hire-me" element={<HireMe />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
