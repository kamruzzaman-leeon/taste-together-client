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

    useEffect(() => {
        axiosSecure.get(`/foodreq/?foodId=${id}`)
            .then(res => {
                if(res.data){
                    setData(res.data);
                }
                Swal.fire({
                    icon: "error",
                    title: "Nothing to Delivered",
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate('/managefood')
                                            
                
            });
    }, [axiosSecure, id,navigate]);

    const handledelivery = (id)=>{
        console.log('id:',id)
        const foodStatusUpdate = { fstatus: 'delivered' };
        axiosSecure.put(`/fooddeliverystatusupdate/${id}`, foodStatusUpdate)
        .then(res=>{
            if (res.data.modifiedCount > 0) {
                console.log(res.data.modifiedCount)
                Swal.fire({
                    icon: "success",
                    title: "successfully Food delivered!",
                    showConfirmButton: false,
                    timer: 1000
                })
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
                    {data.map((request, index) => (
                        <Card key={index} className="w-auto">
                            <div className="flex justify-end px-4 pt-4">
                                {/* Content for the top-right corner */}
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <Avatar
                                    alt={request.requestername}
                                    height="96"
                                    src={`${request.requesterImage}`}
                                    width="96"
                                    className="mb-3 rounded-full shadow-lg"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`${request.requestername}`}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{`${request.reqEmail}`}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Food Request Time: {`${request.fReqDate}`}</span>
                                {/* Additional content */}
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    
                                    <Button color="warning" onClick={() => handledelivery(request._id)}>
                            Delivery
                        </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FoodReqReceive;
