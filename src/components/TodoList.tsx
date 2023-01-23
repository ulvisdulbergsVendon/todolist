import React from 'react'
import { Todo } from '../models/todo'
import TodoItem from './TodoItem'

const TodoList: React.FC<{items: Todo[], deleteTodo: (id: number) => void, handleDone: (id: number) => void, editTodo: (id: number) => void}> = (props) => {
  return (
    <div>
         <ul>
            {props.items.map(item => (<TodoItem id={item.id} title={item.title} description={item.description} isDone={item.isDone} deleteTodo={props.deleteTodo} editTodo={props.editTodo} handleDone={props.handleDone}/>))}
        </ul>
    </div>
  )
}

export default TodoList