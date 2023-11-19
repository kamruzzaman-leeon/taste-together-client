import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../../shared/Loading';
import Title from '../../shared/Title';
import FeaturedFoodCard from './FeaturedFoodCard';

const FeaturedFood = () => {
    const fFood = useLoaderData();
    const {loading} =useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>;
      }
    return (
       
        
        <div className="container mx-auto p-5">
            <Title>Feature Food</Title>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                {fFood.map((food) => <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>)}

            </div>

        </div>
 
    );
};

export default FeaturedFood;