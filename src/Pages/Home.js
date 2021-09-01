import React from 'react'
import styled from 'styled-components'
import {navbarData} from '../Data/NavbarData'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {Feed, Friends, FindPeople} from '../Components'
import {mobileData} from '../Data/MobileData'
const Container = styled.section`
    width:100%;
    height:100vh;
    header{
        width:100%;
        height:10vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 1em;
        h1{
            font-family:"Pacifico", sans-serif;
            font-size:2em;
        }
        nav{
            display:none;
        }
        .menu-btn{
            font-size:1.5em;
            cursor:pointer;
        }
    }
    .mobile-container{
        width:100%;
        height:90vh;
        position:relative;
        .greeting{
            width:100%;
            height:80vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            padding:0 1em;
            h1{
                font-size:1.5em;
                text-align:center;
                span{
                    font-family:'Pacifico', sans-siref;
                }
            }
            p{
                font-size:.8em;
                text-align:center;
            }
        }
        .mobile-nav{
            position:absolute;
            bottom:0;
            right:0;
            width:100%;
            height:10vh;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .mobile-nav-link{
                width:100%;
                height:100%;
                display:grid;
                place-items:center;
                color:linen;
                font-size:1.5em;
            }
        }
    }
`
const Home = ({firstName}) => {
    return (
        <Container>
            <header>
                <h1>User Link</h1>
                <nav>
                    {navbarData.map((item, index) => (
                        <Link className="nav-link" to={item.link} key={index}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <FaBars className="menu-btn"/>
            </header>
            <div className="mobile-container">
                        <div className="greeting">
                            <h1>Welcome To <span>User Link</span></h1>
                            <p>Look around to get started.</p>
                        </div>
                <Switch>
                    <Route path="/home/feed">
                        <Feed firstName={firstName}/>
                    </Route>
                    <Route path="/home/friends" component={Friends}/>
                    <Route path="/home/find-people" component={FindPeople}/>
                </Switch>
                <div className="mobile-nav">
                        {mobileData.map((item, index) => (
                            <Link key={index} to={item.link} className="mobile-nav-link">
                                {item.icon}
                            </Link>

                        ))}
                </div>
            </div>
        </Container>
    )
}

export default Home
