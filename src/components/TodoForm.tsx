import React, {useState} from 'react';
import './TodoForm.css';

const TodoForm: React.FC<{onSave: any}> = (props) => {
    const [id, setId] = useState<number>(1);
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValid(title.trim().length > 1);
        setTitle(e.target.value);
    }

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            id: setId(id + 1),
            title: title,
            description: desc,
            isDone: false
        }
        props.onSave(data);
        setIsValid(false);
        setTitle('');
        setDesc('');
    }
    const cancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setDesc('');
        setTitle('');
    }

  return (
    <div>
        <form onSubmit={formHandler} className="form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={titleHandler} className="inputField" value={title}/>
            {!isValid && <span style={{color: '#c92a2a'}}>Enter a title above 2 letters</span>}
            <label htmlFor="desc">Description</label>
            <textarea name="desc" onChange={(e) => setDesc(e.target.value)} className="inputField">{desc}</textarea>
            <button disabled={!isValid} className="btn">Add</button>
        </form>
        <div className="bottomAction">
            <button onClick={cancelHandler} className="btn">Cancel</button>
        </div>
    </div>
  )
}

export default TodoForm