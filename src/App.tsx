import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
import { Todo } from './models/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit';

function App () {
 const [todo, setTodo] = useState<Todo[]>([]);
 const [isEditing, setIsEditing] = useState<boolean>(false);
 const [editingText, setEditingText] = useState<string>('');
  const getData = (data: Todo) => {
    setTodo(prev => [...prev, data]);
    console.log(todo);
  }

  const deleteTodo = (id: number) => {
    setTodo(todo.filter(list => list.id !== id));
  }

  const handleDone = (id: number) => {
    const item: any = todo.find(item => {
      return item.id === id;
    })
    console.log(item);

    item.isDone = true;
    console.log(item);
  }

  const editTodo = (id: number) => {
    const item: any = todo.find(item => {
      return item.id === id;
    })
    setIsEditing(prev => !isEditing);
    setEditingText(item.title);
  }
  return (
    <Card>
      <TodoForm onSave={getData}/>
      <TodoList items={todo} deleteTodo={deleteTodo} handleDone={handleDone} editTodo={editTodo}/>
      {isEditing && (<TodoEdit value={editingText}/>)}
    </Card>
  );
}

export default App;
