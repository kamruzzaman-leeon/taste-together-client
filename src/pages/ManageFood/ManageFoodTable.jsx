import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PropTypes from 'prop-types'

import { Button, Table } from 'flowbite-react';


const ManageFoodTable = ({ data }) => {

   console.log(data)

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
        // Handle delete logic
        console.log(`Deleting item with ID: ${id}`);
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
                                    <Table.HeadCell key={header.id}>
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
    data: PropTypes.array
}

export default ManageFoodTable;