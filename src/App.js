import React, {useState} from 'react'
import GlobalStyle from "./GlobalStyle"
import {LogInNav, LogIn, Home} from "./Components"
const App = () => {
  const [signedIn, setSignedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [isDefault, setisDefault] = useState(true)
  const handleDefault = () => {
    setisDefault(!isDefault)
  }
  return (
    <>
      <GlobalStyle/>
      {signedIn ? <Home setSignedIn={setSignedIn} handleDefault={handleDefault}/> : <div>
          <LogInNav/>
          <LogIn setSignedIn={setSignedIn} users={users} setUsers={setUsers} isDefault={isDefault} handleDefault={handleDefault}/>
        </div>
      }
    </>
  )
}

export default App