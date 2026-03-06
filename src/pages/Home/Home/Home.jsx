import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import PostJob from '../PostJob/PostJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Category></Category>
            <PostJob></PostJob>
        </div>
    );
};

export default Home;