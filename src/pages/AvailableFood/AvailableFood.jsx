import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Title from "../../shared/Title";
import AvailableFoodCard from "./AvailableFoodCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Loading from "../../shared/Loading";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const AvailableFood = () => {
    const adata=useLoaderData();
    // console.log(adata);
    const { loading } = useContext(AuthContext);
    const [availableData, setAvailableData] = useState(adata);
    if (loading) {
        return <Loading></Loading>;
    }
    
    const handleCustomView = async(e) =>{
        e.preventDefault();
        const view = e.target;
        const search = view.search.value;
        const sort = view.sort.value;

        const url = 'http://localhost:5000';
        try {
            const res = await axios.get(`${url}/availablefood/?fname=${search}&sort=${sort}`);
            setAvailableData(res.data); // Update state with fetched data
           
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <>
            <Helmet>
                <title>Available Food | TasteTogether</title>
            </Helmet>
            <div className="container mx-auto p-5">
                <Title>Available Food</Title>
                <div className="flex gap-10 my-5">
                    <div className="w-full">
                        <form onSubmit={handleCustomView} className="flex flex-col md:flex-row justify-around items-center gap-4">
                            

                                <div className="m-2">
                                    <Label htmlFor="search" value="Food Name" />
                                </div>
                                
                                    <TextInput id="search" type="text" placeholder="Food Name" className="flex-1 w-full"/>
                                
                          
                                <div className="m-2">
                                    <Label htmlFor="sort" value="Sort By Date" />
                                </div>


                                <select id="sort" className="flex-1 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected defaultValue=''></option>
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </select>
                            

                            <Button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 text-center me-2" type="submit">
                                Custom View
                            </Button>
                            <Button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 text-center me-2" type="submit">
                                Reset 
                            </Button>
                        </form>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                    {availableData.map((food) => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)}

                </div>

            </div>
        </>
    );
};

export default AvailableFood;