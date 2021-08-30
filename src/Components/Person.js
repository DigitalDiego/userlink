import React from 'react'
import '../Style/Person.css'
import {BiUserPlus} from 'react-icons/bi'
const Person = ({name, image}) => {
    return (
        <div className='person'>
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="name-container">
                <p>{name}</p>
            </div>
            <div className="friend-btn-container">
                <BiUserPlus className="icon"/>
            </div>
        </div>
    )
}

export default Person
