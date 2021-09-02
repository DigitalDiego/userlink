import React, {useState, useEffect} from 'react'
import GlobalStyle from './GlobalStyle'
import {Switch, Route} from 'react-router-dom'
import {LandingPage, SignIn, Home} from './Pages'
import {SideMenu} from './Components'
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const userFirstName = localStorage.getItem("userFirstName")
    const userLastName = localStorage.getItem("userLastName")
    const userEmail = localStorage.getItem("userEmail")
    const userPassword = localStorage.getItem("userPassword")
    if(userFirstName){
      setFirstName(userFirstName)
    }
    if(userLastName){
      setLastName(userLastName)
    }
    if(userEmail){
      setEmail(userEmail)
    }
    if(userPassword){
      setPassword(userPassword)
    }
  }, [])
  useEffect(() => {
      localStorage.setItem("userFirstName", firstName)
      localStorage.setItem("userLastName", lastName)
      localStorage.setItem("userEmail", email)
      localStorage.setItem("userPassword", password)
  }, [firstName, lastName, email, password])
  return (
    <>
      <GlobalStyle/>
      <SideMenu isOpen={isOpen} toggle={toggle}/>
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
          <Home firstName={firstName} setFirstName={setFirstName} toggle={toggle} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
