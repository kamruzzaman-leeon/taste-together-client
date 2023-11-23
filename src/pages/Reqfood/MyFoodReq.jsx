import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PropTypes from 'prop-types'
import { Button, Table } from 'flowbite-react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const MyFoodReq = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
    axiosSecure.get(`/foodreq/?email=${user.email}`)
    .then(res=>{
        data = res.data;
        console.log(data)
    })
    
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), })
    return (
        <div className='container relative overflow-x-auto mx-auto'>
            {/* <dev><Link to="/addfood"><Button>Add Food</Button></Link></dev> */}
            <Table hoverable striped className='w-auto mx-auto text-sm'>
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
                <Table.Body className="divide-y">

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

export default MyFoodReq;