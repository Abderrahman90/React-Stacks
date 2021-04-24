import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
           <h1>À propos</h1> <br/>
           <h2>Pour travailler dans un métier scientifique, il est nécessaire de :</h2><br/>

           <p>savoir être critique envers son travail et celui des autres<br/>
être créatif et imaginatif<br/>
être un bon communicant<br/>
être autonome et en même temps savoir travailler en équipe<br/>
être curieux<br/>
faire preuve de rigueur.</p>
        </div>
    );
};

export default About;