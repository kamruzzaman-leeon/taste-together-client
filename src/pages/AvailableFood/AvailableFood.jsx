import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Title from "../../shared/Title";
import AvailableFoodCard from "./AvailableFoodCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Loading from "../../shared/Loading";


const AvailableFood = () => {
    const data = useLoaderData();
    // console.log(data);
    const { loading } = useContext(AuthContext);
    if (loading) {
      return <Loading></Loading>;
    }
    // Filter data where fstatus is "available"
    const availableData = data.filter((food) => food.fstatus === "available");
    // console.log(availableData)
    return (

        <>
            <Helmet>
                <title>Available Food | TasteTogether</title>
            </Helmet>
            <div className="container mx-auto p-5">
                <Title>Available Food</Title>
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">

                    {availableData.map((food) => <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)}

                </div>

            </div>
        </>
    );
};

export default AvailableFood;