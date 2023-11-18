import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Title from "../../shared/Title";
import AvailableFoodCard from "./AvailableFoodCard";


const AvailableFood = () => {
    const data = useLoaderData();
    // console.log(data);
    
    // Filter data where fstatus is "available"
    const availableData = data.filter((food) => food.fstatus === "available");
    console.log(availableData)
    return (

        <>
            <Helmet>
                <title>Available Food | TasteTogether</title>
            </Helmet>
            <div className="container mx-auto border shadow-red-400">
                <Title>Available Food</Title>
                <div>

                </div>
                <div className="grid grid-col-1 lg:grid-col-2 gap-5">

                    {availableData.map((food) => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)}

                </div>

            </div>
        </>
    );
};

export default AvailableFood;