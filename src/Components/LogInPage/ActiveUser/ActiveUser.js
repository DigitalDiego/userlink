import React, {useState} from 'react'
import styled from "styled-components"
const Container = styled.section`
  display:${({isDefault}) => (isDefault ? "none" : "flex")};
  width:100%;
  height:100%;
  height:80vh;
  justify-content:center;
  flex-direction:column;
  header{
    width:100%;
    height:30vh;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    padding-bottom:1em;
    h1{
      font-size:2em;
      color:rgb(42, 61, 106);
    }
  }
  form{
    width:100%;
    height:50vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    .text{
      margin-bottom:1em;
      width:280px;
      border:1px solid rgb(42, 61, 106);
      border-radius:5px;
      outline:none;
      font-size:1em;
      height:28px;
      padding-left:1em;
    }
    .btn{
      width:100px;
      height:28px;
      border:none;
      outline:none;
      cursor:pointer;
      background:rgb(42, 61, 106);
      color:#fff;
      font-weight:bold;
      border-radius:5px;
      font-size:1em;
      margin-bottom:1em;
    }
    p{
      font-weight:bold;
      text-decoration:underline;
      cursor:pointer;
    }
  }
  @media only screen and (min-width:800px){
    display:flex;
    width:50%;
    height:100%;
    header{
      width:100%;
      height:40vh;
      display:grid;
      place-items:center;
      h1{
        font-size:2.8em;
      }
    }
    form{
      width:100%;
      height:40vh;
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-direction:column;
      .text{
        margin-bottom:1em;
        width:50%;
        height:28px;
        font-size:1em;
        border:1px solid rgb(42, 61, 106);
        padding-left:1em;
        border-radius:5px;
        outline:none;
      }
      .btn{
        width:25%;
        height:28px;
        font-size:1em;
        background:rgb(42, 61, 106);
        font-weight:bold;
        border-radius:5px;
        color:#fff;
        cursor:pointer;
        border:none;
        outline:none;
      }
      p{
        display:none;
      }
    } 
  }
`
const ActiveUser = ({users, setSignedIn, isDefault, handleDefault}) => {
  const [activeUserName, setActiveUserName] = useState("")
  const [activeUserPassword, setActiveUserPassword] = useState("")
  const userNameFilter = users.filter(user => {
    return user.username.toLowerCase().includes(activeUserName.toLowerCase())
  })
  const userPasswordFilter = users.filter(user => {
    return user.password.toLowerCase().includes(activeUserPassword.toLowerCase())
  })
  const checkLogIn = (event) => {
    event.preventDefault()
    if(activeUserName === userNameFilter[0].username && activeUserPassword === userPasswordFilter[0].password){
      setSignedIn(true)
    } else {
      alert("Information is incorrect, try again.")
    }
  }
  return (
    <Container isDefault={isDefault}>
      <header>
        <h1>Log In</h1>
      </header>
      <form onSubmit={checkLogIn}>
        <input type="text" placeholder="User Name" className="text" onChange={event => setActiveUserName(event.target.value)}/>
        <input type="password" placeholder="Password" className="text" onChange={event => setActiveUserPassword(event.target.value)}/>
        <input type="submit" value="Log In" className="btn"/>
        <p onClick={handleDefault}>Not registered</p>
      </form>
    </Container>
  )
}

export default ActiveUser