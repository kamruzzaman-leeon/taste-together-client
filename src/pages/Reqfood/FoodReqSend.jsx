import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { Button, Table } from 'flowbite-react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';
import Title from '../../shared/Title';

const FoodReqSend = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const requester = user?.email;

    useEffect(() => {
        axiosSecure.get(`/foodreq/?email=${requester}`)
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Error fetching food requests:', error);
            });
    }, [axiosSecure, requester]);

    const handleCancel = (id) => {
                
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this food item!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/foodreq/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Food Deleted!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const updatedData = data.filter(item => item._id !== id);
                            setData(updatedData);
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting food:', error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong while deleting the food item!'
                        });
                    });
            }
        });
    };

    const columns = [
        {
            header: "SERIAL",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "DONATOR",
            accessorKey: "donator",
        },
        {
            header: "PICKUP LOCATION",
            accessorKey: "fplocation",
        },
        {
            header: "EXPIRE DATE",
            accessorKey: "fexpired",
        },
        {
            header: "REQUEST DATE",
            accessorKey: "fReqDate",
        },
        {
            header: "MY DONATION AMOUNT",
            accessorKey: "donateMoney",
        },
        {
            header: "STATUS",
            accessorKey: "fstatus",
        },
        {
            header: "ACTION",
            cell: ({ row }) => (
                
                        <Button color="warning" onClick={() => handleCancel(row.original._id)}>
                            Cancel
                        </Button>
            
            ),
        },
    ];

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
      <>
        <Helmet>
            <title>My Food Request</title>
        </Helmet>
        <div className='container mx-auto'>
            <Title>My Food Request</Title>
        <div className='container relative overflow-x-auto mx-auto'>
            <Table hoverable striped className='w-auto mx-auto text-sm'>
                {table.getHeaderGroups().map(headerGroup => (
                    <Table.Head key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <Table.HeadCell key={header.id}>{header.column.columnDef.header}</Table.HeadCell>
                        ))}
                    </Table.Head>
                ))}
                <Table.Body className="divide-y">
                    {table.getRowModel().rows.map(row => (
                        <Table.Row key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <Table.Cell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
        </div>
        
      </>
    );
};

FoodReqSend.propTypes = {
    // Add PropTypes if needed
};

export default FoodReqSend;
