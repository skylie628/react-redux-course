import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, fetchTodoThunk } from '../redux/todo.action';

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const theme = useSelector(state => state.app.theme);
  console.log("state", theme);

  function handleDeleteTodo(todoId) {
    // const clonedTodos = [...todos];
    // const todosFiltered = clonedTodos.filter(todo => todo.id !== todoId);
    // dispatch(fetchTodo(todosFiltered))

    dispatch(deleteTodo(todoId))
  }

  React.useEffect(() => {
    dispatch(fetchTodoThunk('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1'))
  }, [])

  React.useEffect(() => {
      fetch('https://cms-murex-seven.vercel.app/api/user?page=1&limit=10')
        .then(response => response.json())
        .then(data => console.log(data))
  }, [])

  return (
    <div>
      Todos: {todos.length} <br />

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard