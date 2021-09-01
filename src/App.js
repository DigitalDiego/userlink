import React, {useState} from 'react'
import GlobalStyle from './GlobalStyle'
import {Switch, Route} from 'react-router-dom'
import {LandingPage, SignIn} from './Pages'
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [year, setYear] = useState('')
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route path='/userlink' exact>
          <LandingPage 
          fistName={firstName} 
          setFirstName={setFirstName} 
          lastName={lastName} 
          setLastName={setLastName} 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          year={year}
          setYear={setYear}
          />
        </Route>
        <Route path="/log-in">
          <SignIn
          email={email}
          password={password}
          />
        </Route>
      </Switch>
    </>
  )
}

export default App
