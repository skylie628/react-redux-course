import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, fetchTodo } from '../redux/todo.action';

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  function handleDeleteTodo(todoId) {
    // const clonedTodos = [...todos];
    // const todosFiltered = clonedTodos.filter(todo => todo.id !== todoId);
    // dispatch(fetchTodo(todosFiltered))

    dispatch(deleteTodo(todoId))
  }

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