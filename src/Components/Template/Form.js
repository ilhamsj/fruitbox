import React from 'react'

export default function Form() {
    return (
        <div>
            <form className="forms-sample">
                <div className="form-group">
                    <label for="exampleInputUsername1">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputConfirmPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputConfirmPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button className="btn btn-light">Cancel</button>
            </form>
        </div>
    )
}
