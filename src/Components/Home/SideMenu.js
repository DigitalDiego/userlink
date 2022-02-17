import React from 'react'
import styled from "styled-components"
const Container = styled.section`
    position:absolute;
    top:10vh;
    right:0;
    background:rgb(42, 61, 106);
    width:100vw;
    height:90vh;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
    transition:all .4s linear;
    transform:${({sideMenu}) => (sideMenu ? "translateX(0)" : "translateX(100%)")};
    p{
        width:100%;
        height:50px;
        font-size:1.5em;
        padding-left:1em;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        font-weight:bold;
        color:#fff;
    }
`
const SideMenu = ({sideMenu, handleSideMenu, setSignedIn, handleDefault, home, setHome}) => {
    const signOut = () => {
        setSignedIn(false)
        handleDefault()
    }
    const showFeed = () => {
        if(home != true){
            setHome(true)
        } else {
            return null
        }
    }
    const showNews = () => {
        if(home !=false){
            setHome(false)
        } else {
            return null
        }
    }
  return (
    <Container sideMenu={sideMenu} onClick={handleSideMenu}>
        <p onClick={showFeed}>Home</p>
        <p onClick={showNews}>News</p>
        <p onClick={signOut}>Sign Out</p>
    </Container>
  )
}

export default SideMenu