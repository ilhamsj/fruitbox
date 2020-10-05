import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from '../../Service/CategoryService';
import Single from './Single';

const Index = () => {
    const [categories, setCategories] = useState([]);

    const retrieveData = () =>{
        CategoryService.getAll()
            .then(response => {
                setCategories(response.data.data)
            })
            .catch(err => {
                console.error(err); 
            })
    }

    useEffect(() => {
        retrieveData();
    }, [])

    const listData = (data) => {
        return data.map((val, key) => {
            return <Single data={val} key={key}/>;
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-end flex-wrap">
                            <div className="d-flex">
                                <p className="text-primary mb-0 hover-cursor"> Dashboard </p>
                                <p className="text-muted mb-0 hover-cursor ml-1">/ Categories</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <Link to={"/categories/create"}>Create</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">{ categories.length } Category</div>
                            <div className="table-responsive">
                                <table id="recent-purchases-listing" className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { listData(categories) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
