import React from 'react'
import '../Style/Friend.css'
const Friend = ({image, name, status}) => {
    return (
        <div className="friend">
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="name-container">
                <p>{name}</p>
            </div>
            <div className="status-container">
                {status === true ? (<div className="status on"></div>) : (<div className="status off"></div>)}
            </div>
        </div>
    )
}

export default Friend
