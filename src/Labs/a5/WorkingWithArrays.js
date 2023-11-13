import React, { useEffect ,useState } from "react";
import axios from "axios";

function WorkingWithArrays() {

  const replicableTodo = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  }

  const [todo_search, setTodo_search] = useState(Object.assign({}, replicableTodo));
  const [todo_update, setTodo_update] =  useState(Object.assign({}, replicableTodo));
  const [todo_delete, setTodo_delete] = useState(Object.assign({}, replicableTodo));
  const [todo_complete, setTodo_complete] = useState(Object.assign({}, replicableTodo));
  const [todo_desc, setTodo_desc] = useState(Object.assign({}, replicableTodo));
  const [todo, setTodo] = useState({
    id: 1, title: "Learn NodeJS", due: "2021-09-09",
    description: "Create a NodeJS server with ExpressJS and various RESTful APIs", 
    completed: false,
  });



  const [todo_edit, setTodo_edit] = useState(Object.assign({}, replicableTodo))
  const [todos, setTodos] = useState([]); 

  const fetchTodos = async () => {
    const response = await axios.get(API);
    console.log("______",response);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const deleteTodo = async (todo, todoId) => {
    try {
      let response = null;
      if (todoId) {
        response = await axios.delete(
          `${API}/${todoId}`);
        setTodos(todos.filter((t) => t.id !== todoId));
      } else {
        response = await axios.delete(
          `${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }

  };

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    console.log("4444");
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo_edit(response.data);
  };

  const updateTodo = async (todo) => {
    try {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos((prevTodos) => (
        prevTodos.map((t) => (t.id === todo.id ? todo : t))
      ));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }

  };

  const updateTitle = async (todo) => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`); 
    setTodos(response.data);
  };



  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const API = "http://localhost:4000/a5/todos";
  return (
    <div>
      <h3>Working with Arrays</h3>

      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <textarea className="form-control"
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      />
      <input className="form-control w-25"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />
      <label>
        <input className="me-2"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button className="btn btn-warning mb-2 w-100"
        onClick={postTodo} >
        Post Todo
      </button>

      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>

      <input 
        onChange={(e) => setTodo_edit({
          ...todo_edit, id: e.target.value })}
        className="form-control mb-2 w-50"
        type="number"
        value={todo_edit.id}
      />
      <input 
        onChange={(e) => setTodo_edit({
          ...todo_edit, title: e.target.value })}
        className="form-control mb-2 w-50"
        type="text"
        value={todo_edit.title}
      />

      <button className="btn btn-secondary mb-2 w-100"
        onClick={() => updateTodo(todo_edit)}>
        Update Todo
      </button>

      <button onClick={() => updateTitle(todo_edit)}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>

      <ul className="list-group mb-2">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end me-2">
              Delete
            </button>
    
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger me-2 float-end" >
              Remove
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2 mb-2">
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control w-50 mb-2"
        value={todo_search.id}
        onChange={(e) => setTodo_search({ ...todo_search,
          id: e.target.value })}/>
      <a href={`${API}/${todo_search.id}`}
          className="btn btn-primary me-2 mb-2">
        Get Todo by ID
      </a>

      <h4>Filtering Array Items</h4>
      <a href={`${API}/?completed=true`}
        className="btn btn-primary me-2 mb-2" >
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2 mb-2">
        Create Todo
      </a>

      <h4>Updating an Item in an Array</h4>
      <input
        value={todo_update.id}
        onChange={(e) => setTodo_update({
          ...todo_update, id: e.target.value })}
        className="form-control mb-2 w-50"
        type="number"
      />
      <input
        value={todo_update.title}
        onChange={(e) => setTodo_update({
          ...todo_update, title: e.target.value })}
        className="form-control mb-2 w-50"
        type="text"
      />
      <a
        href={`${API}/${todo_update.id}/title/${todo_update.title}`}
        className="btn btn-primary me-2 mb-2" >
        Update Title to {todo_update.title}
      </a>
      <br/>


      <h3>Deleting from an Array</h3>
      <input
        value={todo_delete.id}
        onChange={(e) => setTodo_delete({
          ...todo_delete, id: e.target.value })}
        className="form-control mb-2 w-50"
        type="number"
      />
      <a href={`${API}/${todo_delete.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo_delete.id}
      </a>

      <button
        className="btn btn-primary me-2"
        onClick={() => deleteTodo(null, todo_delete.id)}
      >
         *W/Error* *Extra Credits* Delete Todo with ID = {todo_delete.id}
      </button>

      <h2>Extra Credits </h2>
      <h3>Complete task by ID</h3>
      <input
        value={todo_complete.id}
        onChange={(e) => setTodo_complete({
          ...todo_complete, id: e.target.value })}
        className="form-control mb-2 w-50"
        type="number"
      />
      <a href={`${API}/${todo_complete.id}/completed/true`}
         className="btn btn-primary me-2">
        Complete task ID = {todo_complete.id}
      </a>

      <h3>Edit description of task by ID</h3>
      <input
        value={todo_desc.id}
        onChange={(e) => setTodo_desc({
          ...todo_desc, id: e.target.value })}
        className="form-control mb-2 w-50"
        type="number"
      />
      <input
        value={todo_desc.description}
        onChange={(e) => setTodo_desc({
          ...todo_desc, id: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <a href={`${API}/${todo_desc.id}/description/${todo_desc.description}`}
         className="btn btn-primary me-2">
        Edit description of task ID = {todo_desc.id}
      </a>

      <hr/>
    </div>
  );
}
export default WorkingWithArrays;