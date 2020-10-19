import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from '../../Service/CategoryService';
import Show from './Show';

import {useSelector, useDispatch} from "react-redux";
import { setCategory } from "../../store/actions/categoryAction";

const Index = () => {
    const categories = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategory())
    }, [dispatch])

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
                            <div className="card-title">Categories</div>
                            <div className="row">
                                {
                                    categories.map((val, key) => (
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
