import React from 'react'
import CategoryService from '../../Service/CategoryService';

const Single = (props) => {

    const editData = () => {
        alert(props.data.id)
    }

    const deleteData = event => {
        event.preventDefault();
        CategoryService.deleteData(props.data.id)
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
            <img src={props.data.image}/>
            <div className="template-demo">
                <button className="btn btn-warning" onClick={editData}>Edit</button>
                <button className="btn btn-danger" onClick={deleteData}>Delete</button>
            </div>
        </div>
    )
}

export default Single
