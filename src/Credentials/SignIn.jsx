import { Helmet } from 'react-helmet';
import loginpic from '../assets/loginpic.jpg'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

const SignIn = () => {



    <Helmet>
        <title>
            Sign In | Taste Together
        </title>
    </Helmet>
    return (
        <div className='container px-5 md:px-20 mx-auto flex flex-col-reverse md:flex-row justify-center content-center gap-5'>

            <div className='flex-1 flex justify-center content-center'>
            <Card className="w-full lg:w-5/6 ">
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <div className='mx-auto'>
                    <Button gradientDuoTone="purpleToBlue" type="submit">Submit</Button>
                    </div>
                </form>
            </Card>
            </div>

            <div className='flex-1 border  border-red-500'>
                <img src={loginpic} alt="login side pic" className='object-cover' />
            </div>


        </div>
    );
};

export default SignIn;