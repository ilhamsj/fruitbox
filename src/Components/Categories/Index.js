import React, { useEffect, useState } from 'react'
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
        <div className="row">
            <div className="col-md-12 stretch-card">
            <div className="card">
                <div className="card-body">
                <p className="card-title">Recent Purchases</p>
                <div className="table-responsive">
                    <table id="recent-purchases-listing" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status report</th>
                            <th>Office</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Gross amount</th>
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
    )
}

export default Index
