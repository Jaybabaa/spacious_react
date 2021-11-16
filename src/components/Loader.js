import React from 'react'
import Star from "../images/planet-loader.svg"

const Loader = () => {
    return (
        <div>
            <div className="loader d-flex justify-content-center align-items-center">
                <img src={Star} alt="planet-svg"/>
            </div>
        </div>
    )
}

export default Loader
