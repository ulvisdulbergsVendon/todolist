import React, {useState} from 'react'
let id: number = 0;
const TodoForm: React.FC<{onSave: any}> = (props) => {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    }
    const cancelHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setDesc('');
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <input type="text" onChange={titleHandler} value={title}/>
            <textarea onChange={descHandler} value={desc}></textarea>
            <button>Add</button>
        </form>
        <button onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default TodoForm