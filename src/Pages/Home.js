import React, {useState} from 'react'
import '../Style/Home.css'
import {homeNavbarData} from '../Data/HomeNavbarData'
import {Link} from 'react-router-dom'
import {Feed, Friends, FindPeople} from '../Components'
const Home = ({firstName}) => {
    const [friend, setFriend] = useState({})
    const [friends, setFriends] = useState([])
    return (
        <section className="home">
            <header className="home-header">
                <h1 className="home-h1">User Link</h1>
                <nav>
                    {homeNavbarData.map((item, index) => (
                        <Link to={item.link} key={index} className="home-nav-link">
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </header>
            <div className="home-container">
                        <Feed firstName={firstName}/>
                        <Friends friend={friend} setFriend={setFriend} friends={friends} setFriends={setFriends}/>
                        <FindPeople friend={friend} setFriend={setFriend} friends={friends} setFriends={setFriends}/>
            </div>
        </section>
    )
}

export default Home
