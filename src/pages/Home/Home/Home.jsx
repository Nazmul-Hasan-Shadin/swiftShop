import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import WhySellinSwiftShop from '../whySellInSwiftShop/WhySellinSwiftShop';
import StartSelling from '../StartSelling/StartSellings';
import VideoSection from '../videoSection/VideoSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhySellinSwiftShop></WhySellinSwiftShop>
            <StartSelling></StartSelling>
            <VideoSection></VideoSection>
        </div>
    );
};

export default Home;