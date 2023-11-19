import { Avatar, Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const AvailableFoodCard = ({ food }) => {
    const { Aditionalinfo, donator, fimage, fname,fexpired, fplocation, fquantity, photoURL, _id } = food;
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
    const { loading } = useContext(AuthContext);
    return (
       <div className='place-items-stretch'>
         <Card className="h-full" imgSrc={fimage} horizontal>
            <div className='flex justify-start'>
                <Avatar img={photoURL} rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div>{donator}</div>
                        <hr />
                    </div>
                </Avatar>
            </div>
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
            <span className='font-normal text-gray-500 dark:text-gray-400'>Expires:</span>  { formattedDate}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 h-full"> {Aditionalinfo}</div>


            <hr />
            <div className="mx-auto">
                <Link to={`/FoodDetails/${_id}`}><Button gradientDuoTone="purpleToBlue" type="submit">
                    View Details
                </Button></Link>
                
            </div>
        </Card>
       </div>
    );
};

AvailableFoodCard.propTypes = {
    food: PropTypes.object,
};

export default AvailableFoodCard;
