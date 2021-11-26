import React from 'react'
import Button from 'react-bootstrap/Button'
import add from '../images/add.png'
import { useState } from 'react'
import planet9 from "../images/planets/planet-9.svg"
import planet8 from "../images/planets/planet-8.svg"
import planet7 from "../images/planets/planet-7.svg"
import planet6 from "../images/planets/planet-6.svg"
import planet5 from "../images/planets/planet-5.svg"
import planet4 from "../images/planets/planet-4.svg"
import planet3 from "../images/planets/planet-3.svg"
import planet2 from "../images/planets/planet-2.svg"
import planet1 from "../images/planets/planet-1.svg"
import FormsPlanet from './FormsPlanet'
import Sidebar from './SideBarPlanets'

function Planets() {

    const [isAppear, setAppear] = useState(false)
    const [isLit, setLit] = useState(false)

    const solars = [
        {
            "name": "Planet Alpha",
            "image": planet9,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet8,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet7,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet6,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet6,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet5,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet1,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet2,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet2,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet4,
            "pop": "Pop: 235"
        },

        {
            "name": "Planet Alpha",
            "image": planet3,
            "pop": "Pop: 235"
        },
        {
            "name": "Planet Alpha",
            "image": planet5,
            "pop": "Pop: 235"
        },
    ]



    return (
        <div>
            <div className="d-flex flex-sm-column flex-md-row flex-lg-row flex-wrap go justify-content-center">
                {solars.map(show => (
                    <div style={{ width: '16rem' }} className="my-4 mx-3 p-3 border my-edit" onClick={() => setAppear(true)}>
                        <img variant="top" src={show.image} alt="planets" width="120px" height="120px" className="d-flex m-auto" />
                        <div>
                            <div>
                                <h5 className="fw-bold">{show.name}</h5>
                            </div>
                            <div>
                                <p className="opacity-50">{show.pop}</p>
                            </div>
                        </div>
                        {isAppear ? <Sidebar/> : ""}
                    </div>
                ))}
            </div>
            <div>
                <Button variant="dark" className="add"><img src={add} alt="" className="buups" onClick={() => setLit(true)} />  </Button>
                {isLit ? <FormsPlanet /> : ""}
            </div>
        </div>
    )
}

export default Planets
