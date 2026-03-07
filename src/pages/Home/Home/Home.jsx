import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import PostJob from '../PostJob/PostJob';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import LatestJobs from '../LatestJobs/LatestJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Category></Category>
            <PostJob></PostJob>
            <FeaturedJobs></FeaturedJobs>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;