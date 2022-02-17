import React from 'react'
import styled from "styled-components"
import {useGetNewsQuery} from "../../Services/NewsApi"
import {Link} from "react-router-dom"
const Container = styled.section`
    display:${({home}) => (home ? "none" : "unset")};
    position:absolute;
    top:10vh;
    right:0;
    width:100vw;
    height:90vh;
    overflow:hidden;
    header{
        width:100%;
        height:10vh;
        display:grid;
        place-items:center;
        h1{
            font-size:2em;
            color:rgb(42, 61, 106);
        }
    }
    .news-container{
        width:100%;
        height:80vh;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        overflow-y:scroll;
        &::-webkit-scrollbar{
            width:5px;
        }
        &::-webkit-scrollbar-track{
            border:none;
        }
        &::-webkit-scrollbar-thumb{
            border-radius:50px;
            background:rgb(42, 61, 106);
        }
        .new-link{
            width:320px;
            font-size:1em;
            padding:.5em;
            background:rgb(42, 61, 106);
            margin-bottom:1em;
            border-radius:5px;
            p{
                color:#fff;
                font-weight:bold;
                margin-bottom:.5em;
                text-align:center;
            }
            .btn{
                width:100%;
                height:28px;
                display:grid;
                place-items:center;
                button{
                    width:100px;
                    height:28px;
                    font-weight:bold;
                    color:rgb(42, 61, 106);
                    border-radius:5px;
                    border:none;
                    outline:none;
                    cursor:pointer;
                    background:#fff;
                    font-size:1em;
                }
            }
        }
    }
    @media only screen and (min-width:800px){
        display:unset;
        width:20vw;
        .news-container{
            .new-link{
                width:200px;
            }
        }
    }
`
const News = ({home}) => {
  const {data, isFetching} = useGetNewsQuery({newsCategory: "Business", count: 10})
  return (
    <Container home={home}>
        <header>
            <h1>News</h1>
        </header>
        <div className="news-container">
            {isFetching ? "Loading..." : data?.value.map((item, index) => (
                <Link to={item.url} key={index} className="new-link" target="_blank" rel="noopener noreferrer">
                    <p>{item.name}</p>
                    <div className="btn">
                        <button>View</button>
                    </div>
                </Link>
            ))}
        </div>
    </Container>
  )
}

export default News