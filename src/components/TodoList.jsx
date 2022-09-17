import React from 'react'

const TodoList = ({ todoArray, setTodoArray }) => {
    return (
        <>
            <div>
                {todoArray.map((todo) => {
                    return (
                        <>
                        <li className='todo-list' key={todo.id}>
                            <input type="text" value={todo.title} className="todo-list-input-box"/>
                        </li>
                        <button>completed</button>
                        <button>Edit</button>
                        <button>Incomplete</button>
                        </>
                        
                    )
                })}
            </div>
        </>
    )
}

export default TodoList

