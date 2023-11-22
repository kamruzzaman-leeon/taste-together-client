import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PropTypes from 'prop-types'

import { Button, Table } from 'flowbite-react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';


const ManageFoodTable = ({initialData}) => {
    
    const axiosSecure = useAxiosSecure();
    // console.log('f',initialData)
    const [data, setData] = useState(initialData);
    useEffect(() => {
        
        setData(initialData);
      }, [initialData]);

    const columns = [
        {
            header: "SERIAL",
            cell: ({ row }) => row.index + 1,
          },
        {
            header: "FOOD NAME",
            accessorKey: "fname"
        },

        {
            header: "FOOD EXPIRE DATE",
            accessorKey: "fexpired"
        },
        {
            header: "ACTION",
            cell: ({ row }) => (
                <div className='flex flex-col md:flex-row gap-2'>
                    <Button color="warning" onClick={() => handleUpdate(row.original._id)}>Update</Button>
                    <Button color="purple" onClick={() => handleManage(row.original._id)}>Manage</Button>
                    <Button  color="failure" onClick={() => handleDelete(row.original._id)}>Delete</Button>
                </div>
            ),
        }

    ]

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), })
    const handleDelete = (id) => {
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
                axiosSecure.delete(`/deletefood/${id}`)
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

    const handleManage = (id) => {
        // Handle manage logic
        console.log(`Managing item with ID: ${id}`);
    };

    const handleUpdate = (id) => {
        // Handle update logic
        console.log(`Updating item with ID: ${id}`);
    };
    return (
        <div className='container'>
            <Table hoverable striped className='w-auto mx-auto'>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <Table.Head key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => (
                                    <Table.HeadCell key={header.id} className=''>
                                        {header.column.columnDef.header}
                                    </Table.HeadCell>
                                ))
                            }
                        </Table.Head>
                            ))
                        }
               <Table.Body  className="divide-y">

                    {
                        table.getRowModel().rows.map(row => (
                            <Table.Row key={row.id}>
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <Table.Cell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Table.Cell>
                                    ))
                                }
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>
            </Table>

        </div>
    );
};
ManageFoodTable.propTypes = {
    initialData: PropTypes.array
}

export default ManageFoodTable;