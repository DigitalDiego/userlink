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
const LandingPage = ({firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, month, setMonth, day, setDay, year, setYear}) => {
    const handleAccountCreation = (event) => {
        if(firstName === '' || lastName === '' || email === '' || password === '' || month === '' || day === '' || year === ''){
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
                        <div className="birthday">
                            <select name="month" id="month" onClick={event => setMonth(event.target.value)}>
                                <option value="">Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">Novemeber</option>
                                <option value="December">December</option>
                            </select>
                            <select name="day" id="day" onClick={event => setDay(event.target.value)}>
                                <option value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="year" id="year" onClick={event => setYear(event.target.value)}>
                                <option value="">Year</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
                        </div>
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
