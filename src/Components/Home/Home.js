import React, {useState} from 'react'
import {MainNav} from "../index"
import Feed from "./Feed"
import News from "./News"
import styled from "styled-components"
import SideMenu from "./SideMenu"
const Container = styled.section`
    position:relative;
    width:100%;
    height:100vh;
    overflow:hidden;
`
const Home = ({setSignedIn, handleDefault}) => {
  const [home, setHome] = useState(true)
  const [sideMenu, setSideMenu] = useState(false)
  const handleSideMenu = () => {
    setSideMenu(!sideMenu)
  }
  return (
    <Container>
        <MainNav setSignedIn={setSignedIn} handleDefault={handleDefault} handleSideMenu={handleSideMenu}/>
        <Feed home={home}/>
        <News home={home}/>
        <SideMenu sideMenu={sideMenu} handleSideMenu={handleSideMenu} setSignedIn={setSignedIn} handleDefault={handleDefault} home={home} setHome={setHome}/>
    </Container>
  )
}

export default Home