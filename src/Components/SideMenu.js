import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {mobileNavbarData} from '../Data/MobileNavbarData'

const Container = styled.section`
    width:100%;
    height:100vh;
    position:absolute;
    top:0;
    right:0;
    background:linen;
    transform:${({isOpen}) => (isOpen ? "translateX(0)" : "translateY(-100%)")};
    opacity:${({isOpen}) => (isOpen ? "1" : "0")};
    transition:all .5s linear;
    z-index:1000;
    header{
        width:100%;
        height:10vh;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        padding:0 1em;
        .close-btn{
            color:#264653;
            font-size:1.5em;
            cursor:pointer;
        }
    }
    .container{
        width:100%;
        height:90vh;
        display:flex;
        justify-content:space-evenly;
        align-items:flex-start;
        flex-direction:column;
        padding:0 1em;
        .nav-link{
            width:100%;
            height:100%;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            border-bottom:1px solid #264653;
            font-size:1.5em;
            color:#264653;
            font-weight:bold;
        }
    }
`
const SideMenu = ({isOpen, toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <header>
                <FaTimes className="close-btn" onClick={toggle}/>
            </header>
            <div className="container">
                {mobileNavbarData.map((item, index) => (
                    <Link to={item.link} key={index} className="nav-link">
                        {item.title}
                    </Link>
                ))}
            </div>           
        </Container>
    )
}

export default SideMenu
