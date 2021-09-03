import React from 'react'
import {Feed, Friends, FindPeople} from '../Components'
import styled from 'styled-components'

const Container = styled.section`
    display:none;
    @media only screen and (min-width:800px){
        width:100%;
        height:90vh;
        display:flex;
        position:relative;
        .col{
            width:20%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    }
`
const DesktopContainer = () => {
    return (
        <Container>
            <Feed/>
            <div className="col">
                <Friends/>
                <FindPeople/>
            </div>
        </Container>
    )
}

export default DesktopContainer
