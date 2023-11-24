import {useEffect, useState } from 'react';
import Title from '../../shared/Title';
import FeaturedFoodCard from './FeaturedFoodCard';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FeaturedFood = () => {

    // const {loading} =useContext(AuthContext);
    const [fFood, setFFood] = useState([]);

    

    useEffect(() => {

        axios.get(`https://taste-together-server.vercel.app/fFood`)
            .then(res => {
                // console.log(res.data);
                setFFood(res.data); // Set the fetched data in state
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (


        <div className="container mx-auto ">
            <Title>Feature Food</Title>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 gap-5">

                {fFood.map((food) => <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>)}

            </div>
            <br />
            <div className="flex justify-center">
                <Link to="/availableFood">
                <Button gradientDuoTone="purpleToBlue" type="submit">
                  View More
                </Button>
                </Link>
            </div>
            
        </div>
        

    );
};

export default FeaturedFood;