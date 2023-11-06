import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './FeaturedBlogs.css';

const FeaturedBlogs = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/topTenBlogs")
            .then(res => {
                setData(res.data);
            })
    }, []);


    const columns = [
        {
            name: 'Serial Number',
            cell: (row, index) => index + 1,
        },
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
            grow: 2,
        },
        {
            name: 'Author Name',
            selector: 'author_name',
            sortable: true,
        },
        {
            name: 'User Photo',
            cell: (row) => (
                <img
                    src={row.userPhoto}
                    alt={`User Photo - ${row.author_name}`}
                    className="user-photo"
                />
            ),
        },
    ];

    return (
        <div className='w-[90% mx-auto]'>
            <div className="featured-blog">
                <DataTable
                    title="Featured Blogs"
                    columns={columns}
                    data={data}
                    defaultSortField="title"
                    pagination
                    striped={true}
                    highlightOnHover={true}
                    pointerOnHover={true}
                />
            </div>
        </div>
    );
};

export default FeaturedBlogs;
