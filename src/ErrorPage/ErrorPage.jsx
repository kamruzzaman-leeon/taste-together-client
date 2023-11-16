import NotFound2 from '../assets/error404/NotFound2.jpg';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container min-h-screen mx-auto flex flex-col justify-center content-center items-center '>
            <div className='w-full md:w-2/3 lg:w-1/2 p-5 '>
                <img
                    src={NotFound2}
                    alt="404 error page"
                    className=' object-cover'
                />
            </div>
            <div>
                <Link to='/'>
                    <Button gradientDuoTone="purpleToBlue">
                        Go to Home
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
