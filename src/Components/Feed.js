import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    width:100%;
    height:80vh;
    position:absolute;
    top:0;
    right:0;
    background:#264653;
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
            background:linen;
        }
    }
    .post-list{
        width:100%;
        height:75vh;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        padding:0 1em;
        .post{
            width:100%;
            background:linen;
            border-radius:10px;
            padding:.2em .4em;
            margin-bottom:.5em;
            .post-header{
                width:100%;
                height:50px;
                padding:unset;
                h1{
                    font-size:1.5em;
                    color:#264653;
                }
            }
            .content{
                width:100%;
                p{
                    color:#264653;
                }
            }
            .date{
                p{
                    color:#264653;
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                }
            }
        }
    }
    @media only screen and (min-width:800px){
        width:80%;
        height:100%;
        position:unset;
        border-right:1px solid linen;
        padding:1em 1em 0 5em;
        form{
            input{
                width:80%;
            }
        }
        .post-list{
            .post{
                width:90%;
                margin:1em 0;
                padding:.2em .5em;
                .post-header{
                    margin-bottom:.5em;
                    h1{
                        font-size:2em;
                    }
                }
                .content{
                    p{
                        font-size:1.1em;
                    }
                }
                .date{
                    p{
                        font-size:1.1em;
                    }
                }
            }
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
    useEffect(() => {
        const template = localStorage.getItem("posts")
        const loadedPosts = JSON.parse(template)
        if(loadedPosts){
            setPosts(loadedPosts)
        }
    }, [])
    useEffect(() => {
        const template = JSON.stringify(posts)
        localStorage.setItem('posts', template)
    }, [posts])
    return (
        <Container>
            <form onSubmit={handlePost}>
                <input type="text" placeholder="Today's Thought" onChange={event => setPost(event.target.value)} value={post}/>
                <button type='submit'>Post</button>
            </form>
            <div className="post-list">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <header className="post-header">
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
