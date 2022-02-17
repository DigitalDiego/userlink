import React, {useState} from 'react'
import styled from "styled-components"
const Container = styled.section`
  display:${({isDefault}) => (isDefault ? "flex" : "none")};
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
const NewUser = ({users, setUsers, setSignedIn, isDefault, handleDefault}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const createUser = (event) => {
    event.preventDefault()
    const usernames = users.map(user => {
      return user.username
    })
    if(usernames.includes(username)){
      alert("Username taken")
    } else {
      const newUser = {
        username:username,
        password:password
      }
      setUsers([...users].concat(newUser))
      setUsername("")
      setPassword("")
      setSignedIn(true)
    }
  }
  return (
    <Container isDefault={isDefault}>
      <header>
        <h1>Register</h1>
      </header>
      <form>
        <input type="text" placeholder="Create User Name" className="text" onChange={event => setUsername(event.target.value)} value={username}/>
        <input type="password" placeholder="Create Password" className="text" onChange={event => setPassword(event.target.value)} value={password}/>
        <input type="submit" value="Enter" className="btn" onClick={createUser}/>
        <p onClick={handleDefault}>Already have a user</p>
      </form>
    </Container>
  )
}

export default NewUser