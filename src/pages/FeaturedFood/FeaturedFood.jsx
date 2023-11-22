import {useEffect, useState } from 'react';
import Title from '../../shared/Title';
import FeaturedFoodCard from './FeaturedFoodCard';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FeaturedFood = () => {

    // const {loading} =useContext(AuthContext);
    const [fFood, setFFood] = useState([]);

    const url = "http://localhost:5000";

    useEffect(() => {

        axios.get(`${url}/fFood`)
            .then(res => {
                console.log(res.data);
                setFFood(res.data); // Set the fetched data in state
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (


        <div className="container mx-auto p-5">
            <Title>Feature Food</Title>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

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