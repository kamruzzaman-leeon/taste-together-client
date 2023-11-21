
import Title from '../../../shared/Title';

const AboutUs = () => {
    return (
       <div className='container mx-auto'>
       <Title>About Us</Title>
        <div className='card w-auto border shadow-lg transform transition-transform hover:scale-95 hover:opacity-80  p-10'>
            <h1 className='tex-3xl md:text-5xl font-bold my-10'>TasteTogether: Connecting Food Enthusiasts through Shared Experiences</h1>
            <p className='text-justify'><span className='text-blue-600'>TasteTogether</span> is a dynamic online platform based in Bangladesh, committed to fostering a community of food enthusiasts who love to share and savor delicious homemade meals. Our mission is to create a space where individuals can come together to share their extra food, reduce food waste, and connect through the joy of culinary experiences.

            <br/><br/>

            At TasteTogether, we believe that everyone should have access to good food, and our platform provides a unique opportunity for people to share their culinary creations with others in their community. Whether you're an aspiring chef, a home cook, or someone with extra meals to spare, TasteTogether welcomes you to join our community and spread the joy of food.

            <br/><br/>

            Our platform goes beyond just sharing meals; it's about building connections, fostering a sense of community, and promoting a sustainable approach to food consumption. Join TasteTogether today and be a part of a movement that celebrates the joy of sharing, one meal at a time.

            <br/><br/>

            Together, let's make every meal an opportunity to connect, share, and savor the flavors of community!</p>
        </div>
       </div>
    );
};

export default AboutUs;
