import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './featured.css'

const FeaturedBlogs = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://delightful-blogs-server.vercel.app/topTenBlogs")
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
            name: 'Author Image',
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
        <div className='blogs-container'>
            <div>
                <div className="featured-blogs">
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
        </div>
    );
};

export default FeaturedBlogs;
