import React from 'react';
import Loading from '../../../shared/Loading';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Home | TasteTogether</title>
            </Helmet>
             <Banner></Banner>
             
        </div>
    );
};

export default Home;