import React, {useState} from 'react'
import ActiveUser from "./ActiveUser/ActiveUser"
import NewUser from "./NewUser/NewUser"
import styled from "styled-components"
const Container = styled.section`
    width:100%;
    height:80vh;
    display:flex;
`
const LogIn = ({setSignedIn, users, setUsers, isDefault, setIsDefault, handleDefault}) => {
  const [user, setUser] = useState("")
  return (
    <Container>
        <NewUser users={users} setUsers={setUsers} setSignedIn={setSignedIn} isDefault={isDefault} handleDefault={handleDefault}/>
        <ActiveUser users={users} setSignedIn={setSignedIn} isDefault={isDefault} handleDefault={handleDefault}/>
    </Container>
  )
}

export default LogIn