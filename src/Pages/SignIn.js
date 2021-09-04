import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container = styled.section`
    width:100%;
    height:100vh;
    display:grid;
    place-items:center;
    position:relative;
    header{
        width:100%;
        display:grid;
        place-items:center;
        position:absolute;
        top:0;
        right:0;
        padding:0 1em;
        h1{
            font-size:2.8em;
            color:linen;
            font-family:'Pacifico', sans-serif;
        }
    }
    form{
        width:90%;
        background:linen;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border-radius:10px;
        padding:1em 0;
        h1{
            color:#264653;
            font-size:2em;
            margin-bottom:1em;
        }
        input{
            background:transparent;
            color:#264653;
            padding:.1em .2em;
            font-size:1em;
            outline:none;
            border:none;
            border-bottom:2px solid #264653;
            width:90%;
            margin-bottom:2em;
            &::placeholder{
                color:#264653;
            }
        }
        .log-in-btn{
            padding:.5em 1em;
            background:#264653;
            color:linen;
            font-weight:bold;
            font-size:1em;
            border-radius:10px;
        }
    }
    @media only screen and (min-width:800px){
        padding:0 5em;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        header{
            position:unset;
            h1{
                font-size:5em;
            }
        }
        form{
            width:50%;
        }
    }
    @media only screen and (min-width:1800px){
        form{
            width:40%;
            input{
                width:80%;
            }
        }
    }
`
const SignIn = ({email, password}) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const handleLogIn = (event) => {
        if(userEmail !== email || userPassword !== password){
            event.preventDefault()
            alert("Email or password are incorrect. Try again.")
        } else {
            return null
        }
    }
    return (
        <Container>
            <header>
                <Link to="/userlink">
                    <h1>User Link</h1>
                </Link>
            </header>
            <form>
                <h1>Log In</h1>
                <input type="text" placeholder="Email" onChange={event => setUserEmail(event.target.value)}/>
                <input type="password" placeholder="Password" onChange={event => setUserPassword(event.target.value)}/>
                <Link to="/home" className="log-in-btn" onClick={handleLogIn}>
                    Log In
                </Link>
            </form>            
        </Container>
    )
}

export default SignIn