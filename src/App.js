import { useState } from 'react';
import './App.css';
import Form from './components/todoForm';
import Todos from './components/todos';

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

        <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
        <Todos handleDelete={handleDelete} handleEdit={handleEdit} todos={todos} />

      </div>
    </div>
  );
}

export default App;
