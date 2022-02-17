import React, {useState} from 'react'
import styled from "styled-components"
const Container = styled.section`
    display:${({home}) => (home ? "unset" : "none")};
    position:absolute;
    top:10vh;
    left:0;
    width:100vw;
    height:90vh;
    form{
        width:100%;
        height:10vh;
        display:flex;
        justify-content:center;
        align-items:center;
        .text{
            width:250px;
            height:28px;
            font-size:1em;
            padding-left:1em;
            border:1px solid rgb(42, 61, 106);
            border-radius:5px;
            margin-right:1em;
            outline:none;
        }
        .btn{
            width:80px;
            cursor:pointer;
            height:28px;
            background:rgb(42, 61, 106);
            border:none;
            outline:none;
            color:#fff;
            border-radius:5px;
            font-size:1em;
            font-weight:bold;
        }
    }
    .post-container{
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
        width:100%;
        height:80vh;
        overflow-y:hidden;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        .post{
            width:80%;
            padding:.5em;
            border-radius:5px;
            margin-bottom:1em;
            background:rgb(42, 61, 106);
            p{
                color:#fff;
            }
            .date{
                width:100%;
                display:flex;
                justify-content:flex-end;
                align-items:center;
            }
        }
    }
    @media only screen and (min-width:800px){
        display:unset;
        width:80vw;
        border-right:1px solid rgb(42, 61, 106);
        form{
            .text{
                width:440px;
            }
            .btn{
                width:100px;
            }
        }
        .post-container{
            .post{
                width:50%;
            }
        }
    }
`
const Feed = ({home}) => {
  const [post, setPost] = useState("")
  const [posts, setPosts] = useState([])
  const createPost = (event) => {
      event.preventDefault()
      if(post != ""){
          const newPost = {
              id: new Date().getTime(),
              text:post,
              month:new Date().getMonth() + 1,
              day:new Date().getDate(),
              year:new Date().getFullYear()
          }
          setPosts([...posts].concat(newPost))
          setPost("")
      } else {
          return null
      }
  }
  return (
    <Container home={home}>
        <form onSubmit={createPost}>
            <input type="text" placeholder="Today's Thought" onChange={event => setPost(event.target.value)} value={post} className="text"/>
            <input type="submit" value="Post" className="btn"/>
        </form>
        <div className="post-container">
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <p>{post.text}</p>
                    <div className="date">
                        <p>{post.month}/{post.day}/{post.year}</p>
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default Feed