import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductService from '../../Service/ProductService';
import Show from './Show';

const Index = () => {
    const [products, setProducts] = useState([]);

    const retrieveData = () =>{
        ProductService.getAll()
            .then(response => {
                setProducts(response.data.data)
                console.log(response.data.data)
            })
            .catch(err => {
                console.error(err); 
            })
    }

    useEffect(() => {
        retrieveData();
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-end flex-wrap">
                            <div className="d-flex">
                                <p className="text-primary mb-0 hover-cursor"> Dashboard </p>
                                <p className="text-muted mb-0 hover-cursor ml-1">/ Product</p>
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
                            <div className="card-title">Product</div>
                            <div className="row">
                                {
                                    products.map((val, key) => (
                                        <Show data={val} key={key}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
