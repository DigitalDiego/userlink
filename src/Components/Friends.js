import React from 'react'
import '../Style/Friends.css'
import {friendsData} from '../Data/FriendsData'
import Friend from '../Components/Friend'
const Friends = () => {
    return (
        <section className="friends">
            <h1>Friends</h1>
            {friendsData.map((item, index) => (
                <Friend image={item.image} name={item.name} status={item.status} key={index}/>
            ))}
        </section>
    )
}

export default Friends
