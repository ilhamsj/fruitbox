import React from 'react'
import ProductService from '../../Service/ProductService';

const Show = (props) => {

    const editData = (id) => {
        alert(id)
    }

    const deleteData = (id) => {
        ProductService.deleteData(id)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err); 
        })
    }
    
    return (
        <div className="col-md-4 mb-4">
            <img src={props.data.image} className="img-fluid" alt={props.data.name}/>
            <div className="mt-3" style={{display: "flex", justifyContent: "space-between"}}>
                <h4>{props.data.name}</h4>
                <h4 style={{color: "green"}}>${props.data.price}</h4>
            </div>
            <div className="template-demo">
                <button className="btn btn-warning" onClick={() => editData(props.data.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteData(props.data.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Show
