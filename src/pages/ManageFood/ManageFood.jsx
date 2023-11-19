import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';

const ManageFood = () => {
    return (
        <>
            <Helmet>
                <title>Manage My Food| TasteTogether</title>
            </Helmet>
            <div className="container mx-auto p-5">
                <Title>Manage My Food</Title>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                 

                </div>

            </div>
        </>
    );
};

export default ManageFood;