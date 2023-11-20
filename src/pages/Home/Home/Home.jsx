import React, { useContext } from 'react';
import Loading from '../../../shared/Loading';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../providers/AuthProvider';
import FoodDetails from '../../FoodDetails/FoodDetails';
import FeaturedFood from '../../FeaturedFood/FeaturedFood';
import AboutUs from '../AboutUs/AboutUs';
import CountDownItem from '../CountDownItem/CountDownItem';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
      return <Loading></Loading>;
    }
    return (
        <>
            <Helmet>
                <title>Home | TasteTogether</title>
            </Helmet>
             <Banner></Banner>
             <FeaturedFood></FeaturedFood>
             <CountDownItem></CountDownItem>
             <AboutUs></AboutUs>
             
        </>
    );
};

export default Home;