import React from 'react'
import {useDispatch} from "react-redux";
import { deleteCategory } from "../../store/actions/categoryAction";

const Show = (props) => {
    const dispatch = useDispatch();

    const editData = (id) => {
        alert(id)
    }

    const deleteData = (id) => {
        dispatch(deleteCategory(id))
    }
    
    return (
        <div className="col-md-4 mb-4">
            <h4>{props.data.name}</h4>
            <img src={props.data.image} className="img-fluid" alt={props.data.name}/>
            <div className="template-demo">
                <button className="btn btn-warning" onClick={() => editData(props.data.uuid)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteData(props.data.uuid)}>Delete</button>
            </div>
        </div>
    )
}

export default Show
