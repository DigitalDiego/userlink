import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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
    @media only screen and (min-width:800px){
        header{
            padding:0 5em;
            h1{
                font-size:3em;
            }
        }
        .container{
            .left-col{
                width:50%;
                height:100%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                padding-left:5em;
                p{
                    font-size:1.2em;
                    line-height:1.5em;
                }
            }
            .right-col{
                width:50%;
                display:grid;
                justify-content:flex-end;
                align-items:center;
                padding:unset;
                padding-right:5em;
                form{
                    width:450px;
                    input{
                        width:80%;
                    }
                }
            }
        }
    }
    @media only screen and (min-width:1800px){
        header{
            h1{
                font-size:4em;
            }
            .menu{
                .log-in-link{
                    padding:.1em 1em;
                }
            }
        }
        .container{
            .left-col{
                p{
                    font-size:1.9em;
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
                </div>
            </header>
            <div className="container">
                <div className="left-col">
                    <p>Here at User Link you can interact with people all over the world. Here you can add friends
                     and connect with communities of people
                    that may be into things your into.
                    It is fun and a good way to meet people in todays day.
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
