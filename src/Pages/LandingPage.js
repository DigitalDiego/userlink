import React from 'react'
import '../Style/LandingPage.css'
import {Link} from 'react-router-dom'
const LandingPage = ({firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, month, setMonth, day, setDay, year, setYear, gender, setGender}) => {
    const handleAccountCreation = (event) => {
        if(firstName === '' || lastName === '' || email === '' || password === '' || month === '' || day === '' || year === '' || gender === ''){
            event.preventDefault()
            alert('Some fields are not completed')
        } else {
            return null
        }
    }
    return (
        <section className="landing-page">
            <header className="landing-page-header">
                <h1 className="landing-page-h1">User Link</h1>
                <Link to='/log-in' className="sign-in">
                    Log In
                </Link>
            </header>
            <div className="container">
                <div className="left-col">
                    <p>MeetUp is where people have a chance to get together digitally and interact with as many people<br/> as they like. Join today and be part of an ongrowing community. Meet people world wide<br/> and make connections that will last a lifetime.</p>
                </div>
                <div className="right-col">
                    <form className="landing-page-form">
                        <h1 className="landing-page-form-h1">Create An Account</h1>
                        <input className="landing-page-input" type="text" placeholder='First Name' onChange={event => setFirstName(event.target.value)}/>
                        <input className="landing-page-input" type="text" placeholder='Last Name' onChange={event => setLastName(event.target.value)}/>
                        <input className="landing-page-input" type="email" placeholder='Email' onChange={event => setEmail(event.target.value)}/>
                        <input className="landing-page-input" type="password" placeholder='Password' onChange={event => setPassword(event.target.value)}/>
                        <div className="birthday">
                            <select name="month" id="month" onChange={event => setMonth(event.target.value)}>
                                <option value="">Month</option>
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <select name="day" id="day" onChange={event => setDay(event.target.value)}>
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
                            <select name="year" id="year" onChange={event => setYear(event.target.value)}>
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
                        <div className="radio">
                            <div className="block">
                                <label htmlFor="male">Male</label>
                                <input type="radio" id='male' name='gender' value='male' onClick={event => setGender(event.target.value)}/>
                            </div>
                            <div className="block">
                                <label htmlFor="female">Female</label>
                                <input type="radio" id='female' name='gender' value='female' onClick={event => setGender(event.target.value)}/>
                            </div>
                        </div>
                        <Link to='/home' onClick={handleAccountCreation}>
                            <button className="landing-page-btn">
                                Create Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LandingPage
