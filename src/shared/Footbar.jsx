import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import foodicon from '../assets/icon/food.png'
import { Link } from 'react-router-dom';
const Footbar = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between gap-5 md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand />
                        <img src={foodicon} className="mr-3 h-6 sm:h-9" alt="Taste Together Logo" />
                        <span className="text-2xl font-bold text-blue-600">Taste Together</span>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                        {/* <div>
                            <Footer.Title title="Direction" />
                            <Footer.LinkGroup col>
                                <Footer.Link as={Link} to="#">About us</Footer.Link>
                                <Footer.Link as={Link} to="#">Our vision</Footer.Link>
                            </Footer.LinkGroup>
                        </div> */}
                        <div>
                            <Footer.Title title="contact-Us" />
                            <Footer.LinkGroup col>
                                <p>Hotline:<span> +880 123456779</span> </p>
                                <p>Office Location <address>Banani C/A, Dhaka</address></p>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link as={Link} to="#">Github</Footer.Link>
                                <Footer.Link as={Link} to="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link as={Link} to="/privacy">Privacy Policy</Footer.Link>
                                <Footer.Link as={Link} to="/condtions">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright as={Link} to="#" by="Taste Together™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon as={Link} to="#" icon={BsFacebook} />
                        <Footer.Icon as={Link} to="#" icon={BsInstagram} />
                        <Footer.Icon as={Link} to="#" icon={BsTwitter} />
                        <Footer.Icon as={Link} to="#" icon={BsGithub} />
                        <Footer.Icon as={Link} to="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Footbar;