import React from 'react'
import { v4 as uuid4 } from "uuid"
const Form = ({input, setInput, todoArray, setTodoArray}) => {

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) =>{
        e.preventDefault()
        setTodoArray([...todoArray, {id: uuid4(), title: input, completeStatus: false}])
        setInput("")
    }

    return (
        <>
            <div>
                <form onSubmit={onFormSubmit}>
                    <input 
                        type="text" 
                        placeholder='Enter a Todo...'
                        className='task-input' 
                        value={input}
                        onChange={(e)=>inputChange(e)}/>
                    <button className='add-button' type='submit'>
                        Add
                    </button>

                </form>
            </div>
        </>

    )
}

export default Form