import React from 'react'
import { Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="head">
            <div className="header">
                <Link to ='/'>    
                    <h2 className="haed-h2"> My Shop</h2>
                    </Link>
            </div>
            <Divider />
        </div>
    )
}

export default Header;
