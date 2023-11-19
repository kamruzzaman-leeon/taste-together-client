import { Avatar, Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types'



const FeaturedFoodCard = ({food}) => {
    const { Aditionalinfo, donator, fimage, fname, fplocation, fquantity, photoURL, _id } = food;
    
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
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {fname} - <small>Quantity</small> {fquantity}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {fplocation}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 h-full"> {Aditionalinfo}</div>


            <hr />
            <div className="mx-auto">
                <Button gradientDuoTone="purpleToBlue" type="submit">
                    View Details
                </Button>
            </div>
        </Card>
       </div>
    );
};

FeaturedFoodCard.propTypes = {
    food: PropTypes.object,
};
export default FeaturedFoodCard;