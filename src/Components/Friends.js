import React from 'react'
import styled from 'styled-components'
import {friendsData} from '../Data/FriendsData'
const Container = styled.section`
    position:absolute;
    top:0;
    right:0;
    background:#264653;
    width:100%;
    height:80vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    overflow-y:scroll;
    padding:0 1em;
    &::-webkit-scrollbar{
        width:5px;
    }
    &::-webkit-scrollbar-track{
        border:none;
    }
    &::-webkit-scrollbar-thumb{
        background:linen;
        border-radius:50px;
    }
    h1{
        font-family:'Pacifico', sans-serif;
        font-size:1.5em;
    }
    .friend{
        width:90%;
        height:40px;
        background:linen;
        margin-bottom:.5em;
        border-radius:50px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:.1em .2em;
        .image-container{
            width:2.5em;
            height:2.1em;
            border:1px solid #264653;
            overflow:hidden;
            border-radius:50%;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
        .name-container{
            width:100%;
            display:grid;
            place-items:center;
            height:100%;
            p{
                color:#264653;
                font-size:1.2em;
                font-weight:bold;
            }
        }
        .status-container{
            width:2.1em;
            height:2.1em;
            overflow:hidden;
            border-radius:50%;
            display:grid;
            place-items:center;
            .status{
                width:.5em;
                height:.5em;
                border-radius:50%;
            }
            .on{
                background:limegreen;
                box-shadow:0px 0px 10px limegreen;
            }
            .off{
                background:crimson;
                box-shadow:0px 0px 10px crimson;
            }
        }
    }
    @media only screen and (min-width:800px){
        width:100%;
        height:50%;
        position:unset;
        border-bottom:1px solid linen;
        .friend{
            height:2em;
            .image-container{
                width:2em;
                height:1.55em;
            }
            .name-container{
                p{
                    font-size:1em;
                }
            }
        }
    }
    @media only screen and (min-width:1800px){
        h1{
            font-size:2em;
        }
        .friend{
            width:80%;
            height:2.1em;
            padding:.1em .2em;
            .image-container{
                width:2.1em;
                height:1.65em;
            }
        }
    }
`
const Friends = () => {
    return (
        <Container>
            <h1>Friends</h1>
            {friendsData.map((item, index) => (
                <div className="friend" key={index}>
                    <div className="image-container">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="name-container">
                        <p>
                            {item.name}
                        </p>
                    </div>
                    <div className="status-container">
                        {item.status === true ? (<div className="status on"></div>) : (<div className="status off"></div>)}
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default Friends
