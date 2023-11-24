import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { Button, Table } from 'flowbite-react';
import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';

const FoodReqReceive = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure()
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/foodreq/?foodId=${id}`)
            .then(res => {
                console.log(res.data)
                setData(res.data);

            })
    }, [axiosSecure,id])

   

    return (
        <>
        <Helmet>
            <title>Received Food Request</title>
        </Helmet>
        <div className='container mx-auto'>
            <Title> Food Request Received</Title>
        <div className='container  mx-auto'>
           
        </div>
        </div>
        
      </>
    );
};

export default FoodReqReceive;