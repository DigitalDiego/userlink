import React, {useState} from 'react'
import GlobalStyle from './GlobalStyle'
import {Switch, Route} from 'react-router-dom'
import {LandingPage, SignIn, Home} from './Pages'
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          />
        </Route>
        <Route path="/log-in">
          <SignIn
          email={email}
          password={password}
          />
        </Route>
        <Route path='/home'>
          <Home firstName={firstName}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
