
import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { displayName: donator, email, photoURL } = user || {};
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = async (data,e) => {
        try {
            // console.log(data);

            const addFood = { donator, email, photoURL, ...data }
            e.target.reset();
            // console.log(addFood)
            const url = '/food'
            axiosSecure.post(url, addFood)
                .then(res => {
                    Swal.fire({
                        icon: "success",
                        title: "successfully Food Added!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                })

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Add Food | Taste Together</title>
            </Helmet>
            <div className="container mx-auto p-10 border flex justify-center content-center border-red-500">
                <Card className="w-11/12 lg:w-5/6">
                    <h1 className="md:text-5xl text-center">Add Food</h1>
                    <hr />

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
                                            selected={startDate}
                                            onChange={(date) => {
                                                setStartDate(date);
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
                        <div className="flex flex-col md:flex-row gap-5">

                            <div className="mb-2 w-full">
                                <Label value="Food Status" />

                                <TextInput
                                    type="text"
                                    name="fstatus"
                                    placeholder="available"
                                    defaultValue={'available'}
                                    readOnly
                                    {...register("fstatus")}
                                />
                                {errors.fquantity && (
                                    <p className="text-red-600">Food Quantity is required.</p>
                                )}
                            </div>
                            <div className="mb-2 w-full">
                                <Label value="Food Pickup Location" />

                                <TextInput
                                    type="text"
                                    placeholder="Food Pickup Location"
                                    name="fplocation"
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
                                {...register("Aditionalinfo", { required: false })}
                            />
                            {errors.fimage && (
                                <p className="text-red-600">Additional information</p>
                            )}
                        </div>

                 

                    {/* button */}
                    <div className="mx-auto">
                        <Button gradientDuoTone="purpleToBlue" type="submit">
                            Add Food
                        </Button>
                    </div>
                </form>
            </Card>
        </div >
</>
);
};

export default AddFood;
