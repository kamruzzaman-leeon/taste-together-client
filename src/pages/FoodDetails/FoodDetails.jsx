import { Helmet } from "react-helmet";
import Title from "../../shared/Title";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Avatar, Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure= useAxiosSecure();
    const navigate = useNavigate();
    const { email: reqEmail } = user;
    const fDetails = useLoaderData();
    const { Aditionalinfo, donator, email: donatorEmail,fstatus, fimage, fname, fexpired, fplocation, fquantity, photoURL, _id: foodId } = fDetails;

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

    // modal form 
    const {
        register,
        control,
        handleSubmit,        
        formState: { errors },
    } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [exDate, setExDate] = useState(expirationDate);
    const [openModal, setOpenModal] = useState(false);
    
    

    const onSubmit = async (data) => {
        // console.log(errors)
        const foodReq = { ...data}       
       
        axiosSecure.post('/foodreq',foodReq)
        .then(res=>{     
           
                console.log(res.data)
                Swal.fire({
                    icon: "success",
                    title: "successfully Food Added!",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/foodreqsend')
            })          
       
        setOpenModal(false); 
    };

    
           
    

    return (
        <>
            <Helmet>
                <title>Food Details</title>
            </Helmet>
            <div className="container mx-auto">
                <Title>Food Details</Title>
                {/* view details */}
                <div className="w-10/12 mx-auto p-5 shadow-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
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
                            {/* <div className="text-sm text-gray-500 dark:text-gray-400 h-full">Details: {Aditionalinfo}</div> */}

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
                        <Button gradientDuoTone="purpleToBlue" onClick={() => setOpenModal(true)}>
                            Food Request
                        </Button>
                    </div>
                </div>
                {/* Modal start  */}
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>{fname} Request</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            {/* food Name */}
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Name" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Name"
                                    name="fname"
                                    defaultValue={`${fname}`}
                                    readOnly
                                    {...register("fname", { required: true })}
                                />

                            </div>
                            {/* food Image URL */}
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Image Url" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Image URL"
                                    name="fimage"
                                    defaultValue={`${fimage}`}
                                    readOnly
                                    {...register("fimage", { required: true })}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food ID" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food ID"
                                    name="foodId"
                                    defaultValue={`${foodId}`}
                                    readOnly
                                    {...register("foodId", { required: true })}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Donator Name" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Donator Name"
                                    name="donator"
                                    defaultValue={`${donator}`}
                                    readOnly
                                    {...register("donator", { required: true })}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Donator Email" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Donator Email"
                                    name="donatorEmail"
                                    defaultValue={`${donatorEmail}`}
                                    readOnly
                                    {...register("donatorEmail", { required: true })}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Requester Email" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Requester Email"
                                    name="reqEmail"
                                    defaultValue={`${reqEmail}`}
                                    readOnly
                                    {...register("reqEmail", { required: true })}
                                />
                            </div>
                            <div>
                                <div className="mb-2 ">
                                    <Label value="Food Request Date" />
                                </div>

                                <Controller
                                    control={control}
                                    name="fReqDate"
                                    render={({ field }) => (
                                        <Datepicker
                                            showIcon
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"                                           
                                            selected={startDate}
                                            readOnly
                                            onChange={(date) => {
                                                setStartDate(date);
                                                field.onChange(date);
                                            }}
                                            popperPlacement="auto"
                                        />
                                    )}
                                />

                                <input type="hidden" {...register('fReqDate')} value={startDate} />
                                <input type="hidden" {...register('fReqstatus')} value={'available'}/>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Pickup Location" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Food Pickup Location"
                                    name="fplocation"
                                    defaultValue={`${fplocation}`}
                                    readOnly
                                    {...register("fplocation", { required: true })}
                                />

                            </div>
                            <div>
                                <div className="mb-2 ">
                                    <Label value="Food Expire Date" />
                                </div>

                                <Controller

                                    control={control}
                                    name="fexpired"
                                    render={({ field }) => (
                                        <Datepicker
                                            showIcon
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            timeCaption="time"                                            
                                            selected={exDate}
                                            readOnly
                                            onChange={(date) => {
                                                setExDate(date);
                                                field.onChange(date);
                                            }}
                                            popperPlacement="auto"
                                        />
                                    )}
                                />
                                
                                <input type="hidden" {...register('requestername')} value={user?.displayName} />
                                <input type="hidden" {...register('requesterImage')} value={user?.photoURL} />
                                <input type="hidden" {...register('fexpired')} value={exDate} />
                                <input type="hidden" {...register('fstatus')} value={'pending'}/>
                            </div>

                           
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Donate Money" />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="Donate Money"
                                    name="donateMoney"
                                    defaultValue={0}
                                    {...register("donateMoney", { required: false })}
                                />
                                <div className="flex justify-center p-5 gap-5">
                                    <Button gradientDuoTone="purpleToBlue" type="submit">Request </Button>
                                    <Button color="red" onClick={() => setOpenModal(false)}>
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>

                </Modal>

            </div>
        </>
    );
};

export default FoodDetails;
