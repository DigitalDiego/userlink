import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    position:absolute;
    top:0;
    right: 0;
    width:100%;
    height:80vh;
    background:#264653;
    padding:0 1em;
    .settings-header{
        width:100%;
        height:20%;
        display:flex;
        justify-content:center;
        align-items:center;
        h1{
            color:linen;
            text-align:center;
        }
    }
    .container{
        width:100%;
        height:80%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .block{
            width:100%;
            margin-bottom:2em;
            display:flex;
            justify-content:space-between;
            align-items:center;
            label{
                font-size:1.1em;
            }
            input{
                background:transparent;
                border-radius:0;
                border:none;
                border-bottom:2px solid linen;
                color:linen;
                width:50%;
                outline:none;
                font-size:1.1em;
            }
        }
    }
    @media only screen and (min-width:800px){
        position:unset;
        width:100%;
        height:90vh;
        padding:0 5em;
        .settings-header{
            border:none;
            height:20%;
        }
        .container{
            height:80%;
            .block{
                label{
                    font-size:1.5em;
                }
                input{
                    font-size:1.5em;
                }
            }
        }
    }
    @media only screen and (min-width:1800px){
        .settings-header{
            h1{
                font-size:4em;
            }
        }
        .container{
            padding:20em;
        }
    }
`
const Settings = ({firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword}) => {
    return (
        <Container>
            <header className='settings-header'>
                <h1>{firstName} {lastName}</h1>
            </header>
            <div className="container">
                <div className="block">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </div>
                <div className="block">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" value={lastName} onChange={event => setLastName(event.target.value)}/>
                </div>
                <div className="block">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="block">
                    <label htmlFor="password">Password</label>
                    <input type="text" value={password} id="password" onChange={event => setPassword(event.target.value)}/>
                </div>
            </div>
        </Container>
    )
}

export default Settings
