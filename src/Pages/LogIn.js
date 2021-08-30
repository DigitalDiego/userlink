import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../Style/LogIn.css'
const LogIn = ({email, password}) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const handleLogIn = (event) => {
        if(userEmail === email && userPassword === password){
            return null
        } else {
            event.preventDefault()
            alert('Email or password do not match. Try again.')
        }
    }
    return (
        <section className="log-in">
            <form className="log-in-form">
                <h1 className="log-in-form-h1">Log In</h1>
                <input className="log-in-form-input" type="text" placeholder="Email" onChange={event => setUserEmail(event.target.value)}/>
                <input className="log-in-form-input" type="password" placeholder="Password" onChange={event => setUserPassword(event.target.value)}/>
                <Link to='/home' className="log-in-btn" onClick={handleLogIn}>
                    Sign In
                </Link>
            </form>
        </section>
    )
}

export default LogIn
