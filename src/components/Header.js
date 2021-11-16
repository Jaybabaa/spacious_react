import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/" className="text-decoration-none"><h3 className="fw-bolder text-dark pt-5 will ps-5">Spacious</h3></Link> 
        </div>
    )
}

export default Header
