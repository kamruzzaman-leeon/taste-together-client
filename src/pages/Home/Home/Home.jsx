import React, { useContext } from 'react';
import Loading from '../../../shared/Loading';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../../providers/AuthProvider';

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
             
        </>
    );
};

export default Home;