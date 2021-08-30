import React, {useState} from 'react'
import '../Style/Feed.css'
import {feedData} from '../Data/FeedData'
const Feed = ({firstName}) => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id:new Date().getTime(),
            text:todo,
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            year: new Date().getFullYear(),
            completed:false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo('')
    }
    const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id != id)
        setTodos(updatedTodos)
    }
    return (
        <section className='feed'>
            <form className="post-section" onSubmit={handleSubmit}>
                <input type="text" placeholder="Post" className="post-input" onChange={event => setTodo(event.target.value)} value={todo}/>
                <button type='submit' className="post-btn">Post</button>
            </form>
            <div className="post-list">
                {feedData.map((item, index) => (
                    <div className="post" key={index}>
                        <div className="post-header">
                            <h2>
                                {item.person}
                            </h2>
                        </div>
                        <div className="content">
                            <p className="content-text">
                                {item.post}
                            </p>
                        </div>
                        <div className="date">
                            <p>
                                {item.date}
                            </p>
                        </div>
                    </div>
                    ))}
                    {todos.map((todo, index) => (
                        <div className="post" key={index}>
                            <div className="post-header">
                                <h2>
                                    {firstName}
                                </h2>
                            </div>
                            <div className="content">
                                <p className="content-text">
                                    {todo.text}
                                </p>
                            </div>
                            <div className="date">
                                <p>
                                    {todo.month} / {todo.day} / {todo.year}
                                </p>
                            </div>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
                        </div>                    
                    ))}
            </div>
        </section>
    )
}

export default Feed
