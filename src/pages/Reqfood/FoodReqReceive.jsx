import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';
import { Avatar, Button, Card } from 'flowbite-react';
import Swal from 'sweetalert2';

const FoodReqReceive = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    console.log('reqrecive',id)

    useEffect(() => {
        axiosSecure.get(`/foodreqreceive/${id}`)
            .then(res => {
                if(res.data){
                    // console.log(res);
                    setData(res.data);
                   
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Nothing to Delivered",
                        showConfirmButton: false,
                        timer: 1000
                    })
                    navigate('/managefood')
                }
                                                            
                
            });
          
    },[axiosSecure, id,navigate]);

    console.log('data here', data)
    
    const handledelivery = (id)=>{
        console.log('id:',id)
        const foodStatusUpdate = { fstatus: 'delivered' };
        axiosSecure.patch(`/fooddeliverystatusupdate/${id}`, foodStatusUpdate)
        .then(async(res)=>{
            if (res.data.modifiedCount > 0) {
                console.log(res.data.modifiedCount)
                Swal.fire({
                    icon: "success",
                    title: "successfully Food delivered!",
                    showConfirmButton: false,
                    timer: 1000
                })
                const foodStatusUpdate = { fstatus: 'pending' }; // Update with the desired status
                await axiosSecure.put(`/foodstatusupdate/${data.foodId}`, foodStatusUpdate);
                navigate('/managefood')
        }})
    }

    return (
        <>
            <Helmet>
                <title>Received Food Request</title>
            </Helmet>
            <div className='container mx-auto'>
                <Title> Food Request Received</Title>
                <div className='container mx-auto'>                  
                        <Card key={data._id} className="w-auto">
                            <div className="flex justify-end px-4 pt-4">
                                {/* Content for the top-right corner */}
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <Avatar
                                    alt={data.requestername}
                                    height="96"
                                    src={`${data.requesterImage}`}
                                    width="96"
                                    className="mb-3 rounded-full shadow-lg"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`${data.requestername}`}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{`${data.reqEmail}`}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Food Request Time: {`${data.fReqDate}`}</span>
                                {/* Additional content */}
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    
                                    <Button color="warning" onClick={() => handledelivery(data._id)}>
                            Delivery
                        </Button>
                                </div>
                            </div>
                        </Card>
                   
                </div>
            </div>
        </>
    );
};

export default FoodReqReceive;
