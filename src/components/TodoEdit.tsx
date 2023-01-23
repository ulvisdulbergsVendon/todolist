import React from 'react'

const TodoEdit: React.FC<{value: string}> = (props) => {
  return (
    <form>
        <input type="text" value={props.value}/>
        <button>Enter</button>
    </form>
  )
}

export default TodoEdit