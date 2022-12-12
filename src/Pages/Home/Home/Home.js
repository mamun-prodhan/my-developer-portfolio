import React from 'react';
import MyProjects from '../../MyProjects/MyProjects';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Technology></Technology>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;