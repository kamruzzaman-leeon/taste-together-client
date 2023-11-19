import { Helmet } from "react-helmet";
import Title from "../../shared/Title";
import { Link, useLoaderData } from "react-router-dom";
import { Avatar, Button, Card } from "flowbite-react";

const FoodDetails = () => {
    const fDetails = useLoaderData();
    const { Aditionalinfo, donator, fimage, fname, fexpired, fplocation, fquantity, photoURL, _id } = fDetails;
    const expirationDate = new Date(fexpired);

    // Options for formatting the date
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    // Format the date
    const formattedDate = expirationDate.toLocaleString("en-US", options);
    return (
        <>
            <Helmet>
                <title>Food Details</title>
            </Helmet>
            <div className="container mx-auto">
                <Title>Food Details</Title>

                <div className="container mx-auto p-5 shadow-lg ">
                    <div className="grid grid-cols-3 gap-5 my-5">
                        <div className="">
                            <img className="object-cover" src={fimage} alt="image description" />
                        </div>
                        <div className="">


                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {fname}
                            </h1>
                            <h3>
                                <span className='font-normal text-gray-500 dark:text-gray-400'>Quantity:</span> {fquantity} person
                            </h3>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-normal text-gray-500 dark:text-gray-400'>Pickup Location:</span>  {fplocation}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-normal text-gray-500 dark:text-gray-400'>Expires:</span>  {formattedDate}
                            </p>
                            <div className="text-sm text-gray-500 dark:text-gray-400 h-full">Details: {Aditionalinfo}</div>

                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Avatar img={photoURL} size='lg' rounded>

                            </Avatar>
                            <div className="space-y-1 font-medium dark:text-white">
                                <div>{donator}</div>

                            </div>
                        </div>

                    </div>
                    <hr />

                    <div className="flex justify-center my-5">
                        <Button gradientDuoTone="purpleToBlue" type="submit">
                            Food Request
                        </Button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;
