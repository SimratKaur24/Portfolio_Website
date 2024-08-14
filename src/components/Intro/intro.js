import React from 'react';
import './intro.css';
import bg from '../../assets/Image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Simrat</span> <br /></span>
                <p className="introPara">Software Development Graduate and founder@WIST, <br />dedicated to create innovative solutions <br /> through proven skilset of Data Analysis and B2B sales.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
