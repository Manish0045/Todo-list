import React from 'react'

const Todos = ({ todos, handleDelete, handleEdit }) => {
    return (
        <div>
            <ul className='allTodos'>
                {todos.map((todo) => {
                    return (<>
                        <li className='singleTodo'>
                            <span className='todoText' key={todo.id}>{todo.todo}</span>
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>

                        </li >
                    </>);
                })}
            </ul>
        </div>
    )
}

export default Todos;
