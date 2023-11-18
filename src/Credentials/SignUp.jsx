import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import signuppic from '../assets/signuppic.jpg';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        
        // console.log(errors)
        createUser( data.email, data.password)
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                const photoURL = data.photoURL || 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=626&ext=jpg&uid=R125636826&ga=GA1.1.918993681.1699267925&semt=sph';
                handleUpdateProfile(data.name, photoURL)
                navigate(location?.state ? location.state : "/")
                // console.log(result)
                Swal.fire({

                    icon: "success",
                    title: "successfully SignUp!",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/signin')
            })
            .catch((error) => {

                // console.error(error)
                Swal.fire({

                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1000
                });
            })
    };

    return (
        <>
            <Helmet>
                <title>Sign Up | Taste Together</title>
            </Helmet>
            <div className='container px-5 md:px-20 mx-auto flex flex-col-reverse lg:flex-row justify-center content-center gap-5'>
                <div className='flex-1'>
                    <img src={signuppic} alt='login side pic' className='object-cover' />
                    <div></div>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <Card className='w-11/12 lg:w-5/6'>
                        <div className='p-5 w-full'>
                            <div className='text-3xl text-center'>Sign Up</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='name' value='Your Name' />
                                </div>
                                <TextInput id='name' type='text' placeholder='name' name='name' {...register('name', { required: true })} />
                               {errors.name && <p className='text-red-600'>name is required.</p>}
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='email1' value='Your email' />
                                </div>
                                <TextInput id='email1' type='email' placeholder='email' name='email' {...register('email', { required: true })} />
                                {errors.email &&  <p className='text-red-600'>Email is required.</p>}
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='password1' value='Your password' />
                                </div>
                                <TextInput id='password1' type='password' name='password' placeholder='password' {...register('password', { required: true })} />
                               {errors.password &&  <p className='text-red-600'>Password is required.</p>}
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='photoURL' value='Your Image URL' />
                                </div>
                                <TextInput id='photoURL' type='text' placeholder='Image URL' name='photoURL' {...register('photoURL', { required: false })} />
                               {errors.photoURL &&  <p className='text-red-600'>Image URl is required.</p>}
                            </div>

                            <div className='mx-auto'>
                                <Button gradientDuoTone='purpleToBlue' type='submit'>
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                        <hr className='h-px w-full' />
                        <SocialLogin />
                        <hr className='h-px w-full' />
                        <div className='label mx-auto mb-2 flex'>
                            <p className='label-text-alt '> Already Have an Account? </p>
                            <Link to='/signin' className='label-text-alt link link-hover text-blue-500 font-bold'>
                                Sign In
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SignUp;
