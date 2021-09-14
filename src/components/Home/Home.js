import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState
    (false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
         <Sidebar is0pen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection />
        </div>
    );
};

export default Home;
