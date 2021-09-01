import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
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
            font-family:'Pacifico', sans-serif;
            font-size:2em;
        }
        .menu{
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            .log-in-link{
                color:#264653;
                background:linen;
                border-radius:10px;
                padding:.1em .5em;
                font-size:1.1em;
                font-weight:bold;
            }
            .menu-bars{
                margin-left:.5em;
                font-size:1.5em;
                cursor:pointer;
            }
        }
    }
    .container{
        display:flex;
        width:100%;
        height:90vh;
        .left-col{
            display:none;
        }
        .right-col{
            width:100%;
            height:100%;
            display:grid;
            place-items:center;
            form{
                background:linen;
                width:90%;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                padding:1em 0;
                border-radius:10px;
                h1{
                    text-align:center;
                    color:#264653;
                    margin-bottom:1em;
                    font-size:2em;
                }
                input{
                    width:90%;
                    background:transparent;
                    border:none;
                    outline:none;
                    border-bottom:2px solid #264653;
                    margin-bottom:2em;
                    padding:.2em;
                    color:#264653;
                    font-size:1em;
                    &::placeholder{
                        color:#264653;
                    }
                }
                .birthday{
                    width:90%;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:2em;
                    select{
                        padding:.2em .4em;
                        border:none;
                        outline:none;
                        background:#264653;
                        color:linen;
                        border-radius:10px;
                        font-weight:bold;
                        font-size:1em;
                        option{
                            background:#fff;
                            color:#264653;
                        }
                    }
                }
                .sign-in-btn{
                    color:linen;
                    background:#264653;
                    padding:.5em 1em;
                    border-radius:10px;
                    font-size:1em;
                    font-weight:bold;
                }
            }
        }
    }
`
const LandingPage = ({firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword}) => {
    const handleAccountCreation = (event) => {
        if(firstName === '' || lastName === '' || email === '' || password === ''){
            event.preventDefault()
            alert("An input field is empty.")
        } else {
            return null
        }
    }
    return (
        <Container>
            <header>
                <h1>User Link</h1>
                <div className="menu">
                    <Link to='/log-in' className="log-in-link">
                        Log In
                    </Link>
                    <FaBars className="menu-bars"/>
                </div>
            </header>
            <div className="container">
                <div className="left-col">
                    <p>At User Link you can interact with people all over the world.<br/> Here you can add friends
                     and connect with communities of<br/> people
                    that may be into things your into.
                    It is fun and a good<br/> way to meet people in todays day.
                    </p>
                </div>
                <div className="right-col">
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="First Name" onChange={event => setFirstName(event.target.value)}/>
                        <input type="text" placeholder="Last Name" onChange={event => setLastName(event.target.value)}/>
                        <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                        <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                        <Link to='/home' className="sign-in-btn" onClick={handleAccountCreation}>
                            Create Account
                        </Link>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default LandingPage
