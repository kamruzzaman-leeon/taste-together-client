import React, { useContext } from 'react';
import Loading from '../../../shared/Loading';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../providers/AuthProvider';
import FoodDetails from '../../FoodDetails/FoodDetails';
import FeaturedFood from '../../FeaturedFood/FeaturedFood';

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
             {/* <FoodDetails></FoodDetails> */}
             
        </>
    );
};

export default Home;