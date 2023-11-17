import { Helmet } from 'react-helmet';
import loginpic from '../assets/loginpic.jpg'
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const SignIn = () => {

    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const localtion =useLocation();

    const handleSignIn=e=>{
        e.preventDefault();
        const form =e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email };

            // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
            //     .then(res => {
            //         console.log(res.data)
            //         if (res.data.success) {
            //             navigate(location?.state ? location?.state : '/')
            //         }
            //     })
            Swal.fire({
            
                icon: "success",
                title: "successfully SignIn!",
                showConfirmButton: false,
                timer: 1000
              });
        })
        .catch((error) => {
            console.log(error)
            Swal.fire({
            
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1000
              });
        });
    }


    <Helmet>
        <title>
            Sign In | Taste Together
        </title>
    </Helmet>
    return (
        <div className='container px-5 md:px-20 mx-auto flex flex-col-reverse lg:flex-row justify-center content-center gap-5'>

            <div className=' flex-1 flex flex-col justify-center items-center'>
            <Card className="w-11/12 lg:w-5/6">
            <div className='p-5 w-full'>
                <div className='text-3xl text-center'>Login</div>
            </div>
                <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="email" name='email' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" name='password'
                        placeholder='password' required />
                    </div>
                   
                    <div className='mx-auto'>
                    <Button gradientDuoTone="purpleToBlue" type="submit">Submit</Button>
                    </div>
                </form>
                <hr className='h-px w-full'/>
                <SocialLogin></SocialLogin>
                <hr className='  h-px w-full'/>
                <div className="label mx-auto mb-2 flex">
            <p className="label-text-alt "> New Here? </p>
            <Link to='/register' className="label-text-alt link link-hover text-blue-500 font-bold"> Register</Link>
          </div>
            
          
          
            </Card>
           
            </div>

            <div className='flex-1 '>
                <img src={loginpic} alt="login side pic" className='object-cover' />
                <div></div>
               
            </div>


        </div>
    );
};

export default SignIn;