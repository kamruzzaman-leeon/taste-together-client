import { Helmet } from 'react-helmet';
import loginpic from '../assets/loginpic.jpg'
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';




const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data,e) => {
       
            const {email,password}=data;
            signIn(email, password)
            .then(res=>{
                const user = res.user;
                // console.log(user);
                if(user){
                    navigate(location.state && location.state.from ? location.state.from : '/');
                    Swal.fire({
                        icon: "success",
                        title: "successfully SignIn!",
                        showConfirmButton: false,
                        timer: 1000
                    });
                e.target.reset()
                }
            })
        .catch((error)=> {
            console.log(error.message)         
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                showConfirmButton: false,
                timer: 1000
            });
        })
        
        
        
    }
    return (
        <>
            <Helmet>
                <title>
                    Sign In | Taste Together
                </title>
            </Helmet>
            <div className='container px-5 md:px-20 mx-auto flex flex-col-reverse lg:flex-row justify-center content-center gap-5'>

                <div className=' flex-1 flex flex-col justify-center items-center'>
                    <Card className="w-11/12 lg:w-5/6">
                        <div className='p-5 w-full'>
                            <div className='text-3xl text-center'>Sign In</div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='email1' value='Your email' />
                                </div>
                                <TextInput id='email1' type='email' placeholder='email' name='email' {...register('email', { required: true })} />
                                {errors.email && <p className='text-red-600'>Email is required.</p>}
                            </div>
                            <div>
                                <div className='mb-2 block'>
                                    <Label htmlFor='password1' value='Your password' />
                                </div>
                                <TextInput id='password1' type='password' name='password' placeholder='password' {...register('password', { required: true })} />
                                {/* {errors.password && <p className='text-red-600'>Password is required.</p>} */}
                                {errors.password && <p className='text-red-600'>Password is required</p>}
                            </div>
                            <div className='mx-auto'>
                                <Button gradientDuoTone="purpleToBlue" type="submit">Sign In</Button>
                            </div>
                        </form>
                        <hr className='h-px w-full' />
                        <SocialLogin></SocialLogin>
                        <hr className='  h-px w-full' />
                        <div className="label mx-auto mb-2 flex">
                            <p className="label-text-alt "> New Here? </p>
                            <Link to='/signup' className="label-text-alt link link-hover text-blue-500 font-bold"> Sign Up</Link>
                        </div>



                    </Card>

                </div>

                <div className='flex-1 '>
                    <img src={loginpic} alt="login side pic" className='object-cover' />
                    <div></div>

                </div>


            </div>
        </>

    );
};

export default SignIn;