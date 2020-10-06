import React, { useEffect, useState } from 'react'
import CategoryService from '../../Service/CategoryService';
import ImgbbService from '../../Service/ImgbbService';

const Loading = () => {
    return(
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}

const Create = (props) => {
    const backToPrevious = (event) => {
        event.preventDefault()
        props.history.push("/categories");
    }

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({
        name: "",
        color: "",
        image: ""
    });

    const handleInputChane = event => {
        const {name, value} = event.target
        setData({...data, [name]: value});
    }

    const handleImageUpload = (event) => {
        setLoading(true)

        var formData = new FormData();

        formData.append('key', '7960779c766347f07f6ecf5c87f2c5d0');
        formData.append('image', event.target.files[0]);
        
        ImgbbService.postData(formData)
        .then(res => {
            console.log(res)
            var image_link = res.data.data.display_url; 
            setData({...data, ['image']: image_link});
            setLoading(false)
        })
        .catch(err => {
            console.error(err); 
        })
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

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <div className="row">
            <div className="col-md">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">Category</div>
                        <form className="forms-sample" onSubmit={ storeData }>
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" type="text" className="form-control" value={data.name} onChange={handleInputChane}/>
                            </div>
                            
                            <div className="form-group">
                                <label>Color</label>
                                <input name="color" type="text" className="form-control" value={data.color} onChange={handleInputChane}/>
                            </div>

                            <div className="form-group">
                                <label>Image</label>
                                <input name="image" type="file" className="form-control" onChange={handleImageUpload}/>
                            </div>

                            <div className="form-group">
                                { data.image ? <img src={data.image} className="img-fluid" alt={data.name}/> : 'Preview' }
                                { loading ? <Loading/> : ''}
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
