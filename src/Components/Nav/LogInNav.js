import React from 'react'
import styled from "styled-components"
const Container = styled.header`
  width:100%;
  height:20vh;
  display:grid;
  place-items:center;
  h1{
    font-size:4em;
    color:rgb(42, 61, 106);
  }
`
const LogInNav = () => {
  return (
    <Container>
      <h1>User Link</h1>
    </Container>
  )
}

export default LogInNav