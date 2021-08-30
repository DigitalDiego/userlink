import React, {useState} from 'react'
import {LandingPage, LogIn, Home} from './Pages'
import { Switch, Route } from 'react-router-dom'
import './Style/App.css'
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  const [gender, setGender] = useState('')
  return (
    <>
      <Switch>
        <Route path='/userlink' exact>
          <LandingPage firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} month={month} setMonth={setMonth} day={day} setDay={setDay} year={year} setYear={setYear} gender={gender} setGender={setGender}/>
        </Route>
        <Route path='/log-in'>
          <LogIn email={email} password={password}/>
        </Route>
        <Route path='/home'>
          <Home firstName={firstName}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
