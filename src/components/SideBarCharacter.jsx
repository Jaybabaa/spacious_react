import React from 'react'

import character6 from "../images/characters/character-6.png"
import character5 from "../images/characters/character-5.png"
import character3 from "../images/characters/character-3.png"



const SideBarCharacter = ({name, friends }) => {

    return (
        <div>
            <div className="sidebar p-3">
            
            <div className="d-flex justify-content-end"><img src="images/x-square-fill.svg" alt="" /></div>
            <div className="pt-4">
                <h3 className="fw-bold">{name}</h3>
                <p className="text1">Jane is really a nice Person. She's been
                    living on planet Alpha for 10 years
                </p>
                <div className="d-flex ">
                    <div>
                        <h5 className="text2">Planet</h5>
                        <h5 className="text2 fw-bold">Alpha</h5>
                    </div>
                    <div className="mx-4">
                        <h5 className="text2">Friends</h5>
                        <h5 className="text2 fw-bold">{friends}</h5>
                    </div>
                </div>
            </div>
            <div className="pt-4"><h6>FRIENDS</h6></div>
            <div className="d-flex pb-2">
                <div>
                    <img src={character5} alt="" className="sideimg"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="text2 lh-1">Eleanor Pena</h4>
                    <h6 className="text1 lh-1">Amet minim malitit nan desert allunace</h6>
                </div>
            </div>
            <div className="d-flex pb-2">
                <div>
                    <img src={character6} alt="" className="sideimg"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="text2 lh-1">Eleanor Pena</h4>
                    <h6 className="text1 lh-1">Amet minim malitit nan desert allunace</h6>
                </div>
            </div>
            <div className="d-flex pb-2">
                <div>
                    <img src={character3} alt="" className="sideimg"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="text2 lh-1">Eleanor Pena</h4>
                    <h6 className="text1 lh-1">Amet minim malitit nan desert allunace</h6>
                </div>
            </div>
            <div className="d-flex pb-2">
                <div>
                    <img src={character3} alt="" className="sideimg"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="text2 lh-1">Eleanor Pena</h4>
                    <h6 className="text1 lh-1">Amet minim malitit nan desert allunace</h6>
                </div>
            </div>
            <div className="d-flex pb-2">
                <div>
                    <img src={character3} alt="" className="sideimg"/>
                </div>
                <div className="pt-1 mx-2">
                    <h4 className="text2 lh-1">Eleanor Pena</h4>
                    <h6 className="text1 lh-1">Amet minim malitit nan desert allunace</h6>
                </div>
            </div>

        </div>
        </div>




      
    )
}

export default SideBarCharacter
