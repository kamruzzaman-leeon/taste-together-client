import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Title from "../../shared/Title";


const AvailableFood = () => {
const data=useLoaderData();
    console.log(data);
    return (

        <>
            <Helmet>
                <title>Available Food | TasteTogether</title>
            </Helmet>
            <div className="container mx-auto border shadow-red-400">
                <Title>Available Food</Title>
                
            </div>
        </>
    );
};

export default AvailableFood;