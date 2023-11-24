import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://taste-together-server.vercel.app',
    withCredentials: true,

})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;