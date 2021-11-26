import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Planets from './Planets'
import Characters from './Characters'

const Navbar = () => {
    return (
        <div className="Navbar ps-5 will pt-2 ">
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link><Link to="/" className="bg-light text-black fw-bold opacity-75 text-decoration-none">PLANETS</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link> <Link to="/Characters" className="opacity-75 text-black cool text-decoration-none">CHARACTERS</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navbar
