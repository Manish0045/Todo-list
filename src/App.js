import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const updatedTodo = todos.map((t) => t.id === editTodo.id ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo });
      setTodos(updatedTodo);
      setEditId(0);
      setTodo(" ");
      return;
    };
    if (todo) {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo(" ");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setEditId(id);
    setTodo(editTodo.todo);
  };

  return (
    <div className="App">
      <div className="cotainer">
        <h1>Todo List App</h1>

        <form className='todoForm' onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>{(editId) ? 'Edit' : 'Go'}</button>
        </form>

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
    </div>
  );
}

export default App;
