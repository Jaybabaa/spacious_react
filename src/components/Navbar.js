import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <div className="Navbar ps-5 will pt-2 ">
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/Planets" className="bg-light text-black fw-bold opacity-75">PLANETS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Characters" className="opacity-75 text-black cool">CHARACTERS</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Navbar
