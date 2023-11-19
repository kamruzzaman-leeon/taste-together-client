import { Helmet } from "react-helmet";
import Title from "../../shared/Title";
import { Link, useLoaderData } from "react-router-dom";
import { Avatar, Button, Card } from "flowbite-react";

const FoodDetails = () => {
    const fDetails = useLoaderData();
    const { Aditionalinfo, donator, fimage, fname, fplocation, fquantity, photoURL, _id } = fDetails;

    return (
        <>
            <Helmet>
                <title>Food Details</title>
            </Helmet>
            <div className="container mx-auto">
                <Title>Food Details</Title>

                <div className="container mx-auto p-5 shadow-lg">
                    <div className="flex gap-10">
                        <div className="border border-emerald-300">
                            <img className="h-auto object-cover" src={fimage} alt="image description" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                             {fname} 
                            </h1>
                            <h5 className="font-normal text-gray-700 dark:text-gray-400">
                                Quantity: {fquantity}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {fplocation}
                            </p>
                            <div className="text-sm text-gray-500 dark:text-gray-400 h-full"> {Aditionalinfo}</div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;
