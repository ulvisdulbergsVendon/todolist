import React, {useState} from 'react';
import classes from './TodoForm.module.css';
let id: number = 0;
const TodoForm: React.FC<{onSave: any}> = (props) => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValid(title.trim().length > 1);
        setTitle(e.target.value);

    }
    const descHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(e.target.value);
    }
    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            id: id++,
            title: title,
            description: desc,
            isDone: false
        }
        props.onSave(data);
        setTitle('');
        setDesc('');
    }
    const cancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setDesc('');
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={formHandler} className={classes.form}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={titleHandler} className={classes.inputField} value={title}/>
            {!isValid && <span style={{color: 'red'}}>Enter a title above 2 letters</span>}
            <label htmlFor="desc">Description</label>
            <textarea name="desc" onChange={descHandler} className={classes.inputField} value={desc}></textarea>
            <button disabled={!isValid} className={classes.btn}>Add</button>
        </form>
        <div className={classes.bottomAction}>
            <button onClick={cancelHandler} className={classes.btn}>Cancel</button>
        </div>
    </div>
  )
}

export default TodoForm