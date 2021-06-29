import React from 'react'
import { Link } from '@reach/router';

const Header = () => {
    return (
        <div className="row">
            <h1 className="col-sm-12">Food Trucks</h1>
            <div>
                <Link to="/">Dashboard</Link>&nbsp;
                <Link to="/trucks/new">New Truck</Link>&nbsp;
            </div>
            
        </div>
    )
}

export default Header
