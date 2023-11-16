
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
    
    return (
        <div className='min-h-screen border border-red-500 flex justify-center content-center'>
           <div className='my-auto'>
           <HashLoader
                color="#3754d7"
                size={100}
            />
           </div>
        </div>
    );
};

export default Loading;