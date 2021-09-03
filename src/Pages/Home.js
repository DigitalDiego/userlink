import React from 'react'
import styled from 'styled-components'
import {navbarData} from '../Data/NavbarData'
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {Feed, Friends, FindPeople, DesktopContainer} from '../Components'
import {Settings, Policy} from '../Pages'
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
            color:linen;
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
    .desktop-container{
        display:none;
    }
    @media only screen and (min-width:800px){
        display:unset;
        header{
            padding:0 5em;
            border-bottom:1px solid linen;
            h1{
                font-size:3em;
            }
            nav{
                display:flex;
                height:100%;
                justify-content:flex-end;
                align-items:center;
                .nav-link{
                    color:linen;
                    font-weight:bold;
                    margin-left:2em;
                }
            }
            .menu-btn{
                display:none;
            }
        }
        .mobile-container{
            display:none;
        }
        .desktop-container{
            display:unset;
            width:100%;
            height:90vh;
        }
    }
`
const Home = ({firstName, setFirstName, lastName, setLastName,  email, setEmail,  password, setPassword, toggle}) => {
    return (
        <Container>
            <header>
                <Link to='/home'>
                    <h1>User Link</h1>
                </Link>
                <nav>
                    {navbarData.map((item, index) => (
                        <Link className="nav-link" to={item.link} key={index}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <FaBars className="menu-btn" onClick={toggle}/>
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
                    <Route path='/home/settings'>
                        <Settings firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                    </Route>
                    <Route path="/home/policy" component={Policy}/>
                </Switch>
                <div className="mobile-nav">
                        {mobileData.map((item, index) => (
                            <Link key={index} to={item.link} className="mobile-nav-link">
                                {item.icon}
                            </Link>

                        ))}
                </div>
            </div>
            <div className="desktop-container">
                <Switch>
                    <Route path="/home" exact>
                        <DesktopContainer firstName={firstName}/>
                    </Route>
                    <Route path='/home/settings'>
                        <Settings firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                    </Route>
                    <Route path="/home/policy" component={Policy}/>
                </Switch>
            </div>
        </Container>
    )
}

export default Home
