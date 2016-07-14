import React from 'react'

export default NotFound = () =>(
    <div>
        <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
                <h1 className="text-center">404</h1>
                <p className="text-center lead">The Page you requested does not exist</p>
            </div>
            <hr/>
        </div>

        <div className="row">
            <div className="col-lg-6 col-lg-offset-3 text-center ">

                <a href="/" type="submit" className="btn btn-default">Go Home</a>
            </div>
        </div>
    </div>
)
