import { Helmet } from 'react-helmet';
import loginpic from '../assets/loginpic.jpg'
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    <Helmet>
        <title>
            Sign Up | Taste Together
        </title>
    </Helmet>

    const handleSignUp = e =>{
        const form = e.
    }

    return (
        <div className='container px-5 md:px-20 mx-auto flex flex-col-reverse lg:flex-row justify-center content-center gap-5'>

        <div className=' flex-1 flex flex-col justify-center items-center'>
        <Card className="w-11/12 lg:w-5/6">
        
     react-hook-form
        
      
      
        </Card>
       
        </div>

        <div className='flex-1 '>
            <img src={loginpic} alt="login side pic" className='object-cover' />
            <div></div>
           
        </div>


    </div>
    );
};

export default SignUp;