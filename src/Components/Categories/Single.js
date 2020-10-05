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
                // props.history.push("/categories");
            })
            .catch(err => {
                console.error(err); 
            })
    }
    
    return (
        <tr>
            <td>{ props.data.name }</td>
            <td>{ props.data.created_at }</td>
            <td>
                <div className="template-demo">
                    <button className="btn btn-warning" onClick={editData}>Edit</button>
                    <button className="btn btn-danger" onClick={deleteData}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Single
