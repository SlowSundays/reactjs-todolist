import React from 'react'
export default function TodoList()
{
    let todos = [
        'Eat',
        'feat again'

    ]

    
    return(
        <ul className='main'>
            {todos.map((todos, todoindex) =>
            {
                return(<li className='TodoItem'  key={todoindex}> {todos} <i class="fa-solid fa-code-commit"></i></li>)
            }
            
            
            )}
            </ul>
       
        )
}