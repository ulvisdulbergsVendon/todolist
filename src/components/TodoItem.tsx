import React from 'react'
import { Todo } from '../models/todo'

const TodoItem: React.FC<{id: number, title: string, description: string, isDone: boolean, deleteTodo: (id: number) => void, handleDone: (id: number) => void, editTodo: (id: number) => void}> = (props) => {
    return (
    <div>
        <li>
            <h1>{props.title} {props.id}</h1>
            <p>{props.description}</p>
            {!props.isDone && (<div>
            <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
            <button onClick={() => props.handleDone(props.id)}>Done</button>
            <button onClick={() => props.editTodo(props.id)}>Edit</button>
            </div>)}
        </li>
    </div>
  )
}

export default TodoItem