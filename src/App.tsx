import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
import { Todo } from './models/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App () {
 const [todo, setTodo] = useState<Todo[]>([]);
 const [editingText, setEditingText] = useState<string>('');
 const [editingDesc, setEditingDesc] = useState<string>('');
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
    setEditingDesc(item.description);
    setEditingId(item.id);
  }
  const editFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTodo(todo.map(item => item.id === editingId ? {...item, title: editingText, description: editingDesc}: item));
    setEditing(false);
  }
  return (
    <Card>
      <div className={classes.bigContainer}>
      <TodoForm onSave={getData}/>
      <TodoList items={todo} deleteTodo={deleteTodo} handleDone={handleDone} editTodo={editTodo}/>
      
      {editing && (<Card><div>
        <form onSubmit={editFormHandler} className={classes.editContainer}>
          <label htmlFor="editTitle">Title</label>
          <input type="text" name='editTitle' defaultValue={editingText} onChange={(e) => setEditingText(e.target.value)} className={classes.inputContainers}/>
          <label htmlFor="editDesc">Description</label>
          <textarea defaultValue={editingDesc} name='editDesc' onChange={(e) => setEditingDesc(e.target.value)} className={classes.inputContainers}></textarea>
          <button className={classes.btn}>Save</button>
        </form>
      </div></Card>)}
      </div>
    </Card>
  );
}

export default App;
