import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Category></Category>
        </div>
    );
};

export default Home;