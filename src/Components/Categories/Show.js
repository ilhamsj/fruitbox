import React from 'react'
import CategoryService from '../../Service/CategoryService';

const Show = (props) => {

    const editData = (id) => {
        alert(id)
    }

    const deleteData = (id) => {
        CategoryService.deleteData(id)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    
    return (
        <div className="col-md-4 mb-4">
            <h4>{props.data.name}</h4>
            <img src={props.data.image} className="img-fluid" alt={props.data.name}/>
            <div className="template-demo">
                <button className="btn btn-warning" onClick={() => editData(props.data.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteData(props.data.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Show
