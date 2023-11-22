import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import ManageFoodTable from './ManageFoodTable'

const ManageFood = () => {
    const axiosSecure=useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [food,setFood]=useState([])

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const url = `/food?email=${user?.email}`;
                const response = await axiosSecure.get(url);
                const myFood = response.data;
                setFood(myFood);
               }
               catch (error) {
                console.log(error);
            }
        };
    
      
        fetchFoodData();
    }, [axiosSecure, user?.email]);
    


    
    return (
        <>
            <Helmet>
                <title>Manage My Food | TasteTogether</title>
            </Helmet>
            <div className="container mx-auto p-5">           
                {
                    <ManageFoodTable data={food}></ManageFoodTable>
                }                
          </div>
        </>
    );
};

export default ManageFood;