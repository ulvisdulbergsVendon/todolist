import React from 'react'
import { Todo } from '../models/todo'
import Card from '../UI/Card'
import './TodoItem.css';
interface Props{
    id: number,
    title: string,
    description: string,
    isDone: boolean,
    deleteTodo: (id: number) => void,
    handleDone: (id: number) => void,
    editTodo: (id: number) => void
}
const TodoItem: React.FC<Props> = (props) => {
    return (
    <Card>
        <li>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {!props.isDone && (
            <div className="actionContainer">
            <button className="btn" onClick={() => props.deleteTodo(props.id)}>Delete</button>
            <button className="btn" onClick={() => props.handleDone(props.id)}>Done</button>
            <button className="btn" onClick={() => props.editTodo(props.id)}>Edit</button>
            </div>
            )}
        </li>
    </Card>
  )
}

export default TodoItem