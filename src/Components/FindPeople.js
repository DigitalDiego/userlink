import React from 'react'
import '../Style/FindPeople.css'
import {findPeopleData} from '../Data/FindPeopleData'
import {Person} from '../Components'
const FindPeople = () => {
    return (
        <section className="find-people">
            <h1>Find People</h1>
            {findPeopleData.map((item, index) => (
                <Person image={item.image} name={item.name} key={index}/>
            ))}
        </section>
    )
}

export default FindPeople
