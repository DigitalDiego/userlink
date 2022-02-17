import React from 'react'
import styled from "styled-components"
import {FaBars} from "react-icons/fa"
const Container = styled.header`
    width:100%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 1em;
    border-bottom:1px solid rgb(42, 61, 106);
    h1{
        font-size:2em;
        color:rgb(42, 61, 106);
    }
    button{
        width:100px;
        height:28px;
        background:rgb(42, 61, 106);
        border:none;
        outline:none;
        border-radius:5px;
        cursor:pointer;
        color:#fff;
        font-weight:bold;
        font-size:1em;
        display:none;
    }
    .icon{
        font-size:1.1em;
        cursor:pointer;
        color:rgb(42, 61, 106);
    }
    @media only screen and (min-width:800px){
        button{
            display:unset;
        }
        .icon{
            display:none;
        }
    }
`
const MainNav = ({setSignedIn, handleDefault, handleSideMenu}) => {
  const logOut = () => {
      setSignedIn(false)
      handleDefault()
  }
  return (
    <Container>
        <h1>User Link</h1>
        <button onClick={logOut}>Sign Out</button>
        <FaBars className="icon" onClick={handleSideMenu}/>
    </Container>
  )
}

export default MainNav