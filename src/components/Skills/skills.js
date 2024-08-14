import React from 'react';
import './skills.css';
import UIDesign from '../../assets/data.jpg';
import WebDesign from '../../assets/Troubleshooting.png';
import AppDesign from '../../assets/TechSales.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Who am I?</span>
            <span className="skillDesc">A creative problem solver with a passion for designing, planning, and developing innovative solutions. I mostly enjoy working on the analysis side of projects, but I am always open to learning new things<br/>
⚡ Highly motivated and passionate about learning new technologies. I always look for ways to integrate and share new technologies with others<br />⚡ Very detail-oriented and organized. I love to plan and design to create the best user experience<br />⚡ Enjoy client to client interaction and working in a team environment. I am a great communicator and love to collaborate with others<br />🌟 I love to meet new people, organize hangouts, play sports and do other physical activities! (Running, Ski, Volleyball, Shooting, Camping, Backpacking and Body Building)<br />🌟 I am a training for marathon! (Why-I guess to flex it before my freinds that I am training for Marathon!!)<br />🌟 I am a very outgoing, creative, energetic and active person. I love to brighten up the room, share my honest opinions and make sure everyone is comfortable</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analysis</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Troubleshooting</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Technical Sales</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
