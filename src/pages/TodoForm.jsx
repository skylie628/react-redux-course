import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../redux/todo.action';
import { setTheme } from '../redux/app.action';

function TodoForm() {
  const dispatch = useDispatch();
  console.log('todoform')

  function handleAddTodo() {
    const todoItem = {
      id: Date.now(),
      title: `Todo Item ${Date.now()}`,
    }
    dispatch(addTodoThunk(todoItem))
  }

  function handeChangeTheme() {
    dispatch(setTheme('dark'))
  }

  return (
    <div>
      <button type='button' onClick={handleAddTodo}>Add Todo</button>
      <button type='button' onClick={handeChangeTheme}>Change Theme</button>
    </div>
  )
}

export default TodoForm
