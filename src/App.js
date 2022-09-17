import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import TodoList from './components/TodoList'


const App = () => {
  const [input, setInput] = useState("")
  const [todoArray, setTodoArray] = useState([])
  return (
    <>
      <div className='app'>
        <div className='app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <Form 
              input = { input }
              setInput = { setInput }
              todoArray = { todoArray }
              setTodoArray = { setTodoArray }
            />
          </div>
          <div>
            <TodoList todoArray={todoArray} setTodoArray = {setTodoArray} />
          </div>
        </div>
      </div>
    </>
  )
}
export default App