import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useTable } from 'react-table';

const ManageFood = () => {
    const axiosSecure=useAxiosSecure();
    const {user} = useContext(AuthContext);
    
    const url =`/food?email=${user?.email}`;
    axiosSecure.get(url)
    .then(res=>{
        // console.log(res.data)
        const myFood=res.data;
        console.log(myFood)
        
        

    })
    .catch(error=>console.log(error))
    
    return (
        <>
            <Helmet>
                <title>Manage My Food| TasteTogether</title>
            </Helmet>
            <div className="container mx-auto p-5">           
                {
                    
                }                
          </div>
        </>
    );
};

export default ManageFood;