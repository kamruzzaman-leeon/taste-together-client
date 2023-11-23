import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Title from "../../shared/Title";
import { useLoaderData,  useNavigate } from "react-router-dom";


const UpdateFood = () => {


    const olddata = useLoaderData()
    console.log("olddata",olddata)
    const {_id,fstatus,fname,fimage,fquantity,fexpired, fplocation,Aditionalinfo}=olddata
    
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
    console.log('format',formattedDate)

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    // console.log(location, data)
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [exDate, setExDate] = useState(expirationDate);
    

    const onSubmit = async (data) => {
        try {
            
            data.fquantity = parseInt(data.fquantity, 10);
            const updateFood = {_id,fstatus,...data}
            console.log(updateFood)
            const url = `/updatefood/${_id}`
            axiosSecure.put(url, updateFood)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount>0) {
                        console.log(res.data.modifiedCount)
                        Swal.fire({
                            icon: "success",
                            title: "successfully Food Added!",
                            showConfirmButton: false,
                            timer: 1000
                        })
                        navigate('/managefood')
                      
                        
                    }

                })
        } catch (error) {
            console.log(error);
        }
    }
    
    return (

        <>
            <Helmet>
                <title>Update Food | Taste Together</title>
            </Helmet>
            <div className="container mx-auto  px-10 py-20 ">
                <Title>Update Food</Title>
                <Card className="w-full md:w-11/12 lg:w-5/6 mx-auto">

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
                                {...register("fname", { required: true })}
                            />
                            {errors.fname && (
                                <p className="text-red-600">Food name is required.</p>
                            )}
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
                                {...register("fimage", { required: true })}
                            />
                            {errors.fimage && (
                                <p className="text-red-600">Food Image URL is required.</p>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            {/* food quantity */}
                            <div className="mb-2 w-full">
                                <Label value="Food Quantity" />
                                <TextInput
                                    type="number"
                                    placeholder="Food Quantity"
                                    name="fquantity"
                                    defaultValue={`${fquantity}`}
                                    {...register("fquantity", { required: true })}
                                />
                                {errors.fquantity && (
                                    <p className="text-red-600">Food Quantity is required.</p>
                                )}
                            </div>
                            <div className="mb-2 ">
                                <Label value="Food Expired Date" />
                                <br />
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
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            selected={exDate}                                            
                                            onChange={(date) => {
                                                setExDate(date);
                                                field.onChange(date);
                                            }}
                                            popperPlacement="auto"
                                        />
                                    )}
                                />
                                {errors.fexpired && (
                                    <p className="text-red-600">Expiry date is required.</p>
                                )}
                            </div>
                        </div>
                        <div >
                            <div className="mb-2 w-full">
                                <Label value="Food Pickup Location" />

                                <TextInput
                                    type="text"
                                    placeholder="Food Pickup Location"
                                    name="fplocation"
                                    defaultValue={`${fplocation}`}
                                    {...register("fplocation", { required: true })}
                                />
                                {errors.fplocation && (
                                    <p className="text-red-600">Food pickup location is required.</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-2 block">
                            <Label value="Additional info" />

                            <Textarea
                                type="text"
                                placeholder="Additional info"
                                name="Additionalinfo"
                                defaultValue={`${Aditionalinfo}`}
                                {...register("Aditionalinfo", { required: false })}
                            />
                            {errors.fimage && (
                                <p className="text-red-600">Additional information</p>
                            )}
                        </div>

                        {/* <input type="hidden" {...register('fstatus')} value={'available'} /> */}

                        {/* button */}
                        <div className="mx-auto">
                            <Button gradientDuoTone="purpleToBlue" type="submit">
                                Update Food
                            </Button>
                        </div>
                    </form>
                </Card>
            </div >
        </>
    );
};

export default UpdateFood;