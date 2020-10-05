import React, { useState } from 'react'
import CategoryService from '../../Service/CategoryService';

function Create(props) {
    const backToPrevious = (event) => {
        event.preventDefault()
        props.history.push("/categories");
    }

    const initialData = {
        name: "",
        description: "this is description",
        image: "this is image"
    };

    const [data, setData] = useState(initialData);

    const handleInputChane = event => {
        const {name, value} = event.target
        setData({...data, [name]: value});
    }

    const storeData = event => {
        event.preventDefault();
        CategoryService.postData(data)
            .then(response => {
                console.log(response)
                props.history.push("/categories");
            })
            .catch(err => {
                console.error(err.response.data); 
                alert(err.response.data)
            })
    }

    return (
        <div className="row">
            <div className="col-md">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Category</div>
                        <form className="forms-sample" onSubmit={ storeData }>
                            <div className="form-group">
                                <input name="name" type="text" className="form-control" value={data.name} onChange={handleInputChane}/>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Add</button>
                            <button className="btn btn-light" onClick={backToPrevious}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
