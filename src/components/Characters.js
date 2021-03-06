import React from 'react'
import Button from 'react-bootstrap/Button'
import add from '../images/add.png'
import SideBarCharacter from './SideBarCharacter'
import { useState } from 'react'
import FormsCharacter from './FormsCharacter'


import character1 from "../images/characters/character-1.png"
import character2 from "../images/characters/character-2.png"
import character3 from "../images/characters/character-3.png"
import character4 from "../images/characters/character-4.png"
import character5 from "../images/characters/character-5.png"
import character6 from "../images/characters/character-6.png"
import character7 from "../images/characters/character-7.png"
import character8 from "../images/characters/character-8.png"
import character9 from "../images/characters/character-9.png"


const Characters = () => {

    const [isUp, setUp] = useState(false)
    const [isLit, setLit] = useState(false)
    const [value,setValue] = useState ({})
    const rollit = (show) =>{
        setUp(true)
        setValue({name: show.name 
            ,friends: show.friends })
        console.log(show)
        console.log(value.name)
    }

const members = [
    {
        "id": 1,
        "name" : "Brooklyn Simmons",
        "image" : character1,
        "friends" : "23 friends"
    },
    {
        "id": 2,
        "name" : "Cameron Williamson",
        "image" : character2,
        "friends" : "23 friends",
    },
    {
        "id": 3,
        "name" : "Leslie Alexander",
        "image" : character3,
        "friends" : "23 friends",
    },
    {
        "id": 4,
        "name" : "Kristin Watson",
        "image" : character4,
        "friends" : "23 friends"
    },
    {
        "id": 5,
        "name" : "Jenny Wilson",
        "image" : character5,
        "friends" : "23 friends"
    },
    {
        "id": 6,
        "name" : "Marvin Mckinney",
        "image" : character6,
        "friends" : "23 friends"
    },
    {
        "id": 7,
        "name" : "Jerome Bell",
        "image" : character7,
        "friends" : "23 friends"
    },
    {
        "id": 8,
        "name" : "Guy Hawkins",
        "image" : character8,
        "friends" : "23 friends"
    },
    {
        "id": 9,
        "name" : "Robert Fox",
        "image" : character9,
        "friends" : "23 friends"
    }

]


    return (
        <div>
                <div className="d-flex flex-sm-column flex-md-row flex-lg-row flex-wrap go justify-content-center">
                    {
                            members.map(show => (
                                <div className="card my-4 mx-3 px-0 border come my-edit" key={show.id} onClick={(e) => rollit(show)} >
                                        <img class="card-img-top char-img" src={show.image} alt="Card" />
                                    <div class="card-body">
                                        <h5 class="card-title">{show.name}</h5>
                                        <p>{show.friends}</p>
                                        {isUp ? <SideBarCharacter name={value.name} friends={value.friends} /> : "" }
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div>
                    <Button variant="dark" className="add whoa" ><img src={add} alt="" className="buups" onClick={() => setLit(true)}/>  </Button>
                    {isLit ? <FormsCharacter/> : "" }
                </div>
        </div>
    );
};

export default Characters
