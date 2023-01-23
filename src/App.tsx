import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
import { Todo } from './models/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App () {
 const [todo, setTodo] = useState<Todo[]>([]);
 const [editingText, setEditingText] = useState<string>('');
 const [editingId, setEditingId] = useState<number>();
const [editing, setEditing] = useState<boolean>(false);
  const getData = (data: Todo) => {
    setTodo(prev => [...prev, data]);
  }

  const deleteTodo = (id: number) => {
    setTodo(todo.filter(list => list.id !== id));
  }

  const handleDone = (id: number) => {
    setTodo(todo.map((item) => item.id === id ? {...item, isDone: !item.isDone} : item))
  }

  const editTodo = (id: number) => {
    const item: any = todo.find(elm => elm.id === id);
    setEditing(prev => !editing);
    setEditingText(item.title);
    setEditingId(item.id);
  }
  const editFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTodo(todo.map(item => item.id === editingId ? {...item, title: editingText}: item));
    setEditing(false);
  }
  return (
    <Card>
      <TodoForm onSave={getData}/>
      <TodoList items={todo} deleteTodo={deleteTodo} handleDone={handleDone} editTodo={editTodo}/>
      {editing && (<div>
        <form onSubmit={editFormHandler}>
          <input type="text" defaultValue={editingText} onChange={(e) => setEditingText(e.target.value)}/>
          <button>Save</button>
        </form>
      </div>)}
    </Card>
  );
}

export default App;
