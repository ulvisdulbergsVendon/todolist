import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Card from './UI/Card';
interface Todo {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

let id = 0;

function App () {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [isDone, setIsDone] = useState<boolean>(false);

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [isValid, setIsValid] = useState<boolean>(false);

  const [error, setError] = useState<string>('');

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(title.length === 0){
      setIsValid(isValid => !isValid);
      setError('Enter a valid sentence!')
      console.log(isValid)
    }else{
      setTitle(e.target.value);
    }
  }

  const descHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  }

  const doneHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!isDone){
      setIsDone((prev) => !isDone);
    }
  }

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, {id: id++, title: title, description: desc, isDone: isDone}]);
    setTitle('');
    setDesc('');
  }


  const enableEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log();
    setIsEditing((prev) => !isEditing);
  }

  const cancelTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTitle('');
    setDesc('');
  }
  return (
    <Card>
      <h1>Todo List</h1>
      <div className={classes.top}>
        <form onSubmit={saveHandler} className={classes.topForm}>
          <input type="text" placeholder='Title' value={title} onChange={titleHandler}/>
          {error && <p style={{color: 'red', fontSize: '0.8rem'}}>{error}</p>}
          <textarea placeholder='Desctiption' value={desc} onChange={descHandler}/>
          <div className={classes.action}>
            <button disabled={isValid} className={classes.add}>Add</button>
          </div>
        </form>
        <button onClick={cancelTodo}>Cancel</button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <Card>
            <li key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {!isDone && (
                <div>
                  <button onClick={() => setTodoList(todoList.filter(list => list.id !== item.id))}>Delete</button>
                  <button onClick={enableEdit}>Edit</button>
                  <button onClick={doneHandler}>Done</button>
                </div>
              )}
            </li>
            </Card>
          ))}
        </ul>
      </div>
      {isEditing && (<div>
        <form>
          <input type='text' name='editTitle' placeholder='Title'/>
          <input type="text" name="editDesc" placeholder='Description'/>
          <button>Enter</button>
        </form>
      </div>)}
    </Card>
  );
}

export default App;
