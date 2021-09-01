import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    width:100%;
    height:80vh;
    form{
        width:100%;
        height:5vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 1em;
        input{
            width:280px;
            padding:.1em .2em;
            background:none;
            border:none;
            outline:none;
            border-bottom:2px solid linen;
            color:linen;
            font-size:1em;
            &::placeholder{
                color:linen;
            }
        }
        button{
            padding:.1em .5em;
            font-size:1em;
            border-radius:10px;
            border:none;
            outline:none;
            cursor:pointer;
            font-weight:bold;
        }
    }
`
const Feed = ({firstName}) => {
    const [post, setPost] = useState('')
    const [posts, setPosts] = useState([])
    const handlePost = (event) => {
        event.preventDefault()
        const newPost = {
            id: new Date().getTime(),
            text:post,
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            year: new Date().getFullYear(),
            name: firstName
        }
        setPosts([...posts].concat(newPost))
        setPost('')
    }
    return (
        <Container>
            <form onSubmit={handlePost}>
                <input type="text" placeholder="Today's Thought" onChange={event => setPost(event.target.value)} value={post}/>
                <button type='submit'>Post</button>
            </form>
            <div className="post-list">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <header>
                            <h1>{post.name}</h1>
                        </header>
                        <div className="content">
                            <p>{post.text}</p>
                        </div>
                        <div className="date">
                            <p>{post.month} / {post.day} / {post.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Feed
