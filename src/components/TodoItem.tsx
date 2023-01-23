import React from 'react'
import { Todo } from '../models/todo'
import Card from '../UI/Card'

const TodoItem: React.FC<{id: number, title: string, description: string, isDone: boolean, deleteTodo: (id: number) => void, handleDone: (id: number) => void, editTodo: (id: number) => void}> = (props) => {
    return (
    <Card>
        <li>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {!props.isDone && (<div>
            <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
            <button onClick={() => props.handleDone(props.id)}>Done</button>
            <button onClick={() => props.editTodo(props.id)}>Edit</button>
            </div>)}
        </li>
    </Card>
  )
}

export default TodoItem