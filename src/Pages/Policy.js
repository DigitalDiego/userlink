import React from 'react'
import styled from 'styled-components'
const Container = styled.section`
    position:absolute;
    top:0;
    right:0;
    width:100%;
    height:80vh;
    background:#264653;
    overflow:hidden;
    overflow-y:scroll;
    .block{
        width:100%;
        padding:1em;
        display:flex;
        justify-content:center;
        align-items:flex-start;
        flex-direction:column;
        h2{
            margin-bottom:.5em;
        }
        span{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:.5em;
            input{
                margin-right:.5em;
            }
        }
        a{
            color:lightblue;
            font-weight:bold;
        }
    }
`
const Policy = () => {
    return (
        <Container>
            <div className="block">
                <h2>Account Privacy</h2>
                <span>
                    <input type="checkbox" />
                    <p>Private Account</p>
                </span>
                <p>Choose whether or not people can see your profile. You can change this when ever you choose.</p>
            </div>
            <div className="block">
                <h2>Activity Status</h2>
                <span>
                    <input type="checkbox" />
                    <p>Show Activity Status</p>
                </span>
                <p>Decide if people can see what you've been up to (likes, posts, friends requestsm, etc.). You can change this when you decide to.</p>
            </div>
            <div className="block">
                <h2>Message Sharing</h2>
                <span>
                    <input type="checkbox" />
                    <p>Allow Sharing</p>
                </span>
                <p>Alllow people to share your messages.</p>
            </div>
            <div className="block">
                <h2>Account Data</h2>
                <a href="#">Download Data</a>
            </div>
            <div className="block">
                <h2>Data Download</h2>
                <a href="#">Download Data</a>
            </div>
        </Container>
    )
}

export default Policy
