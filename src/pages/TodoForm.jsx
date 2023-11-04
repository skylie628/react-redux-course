import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo.action';
import { setLoading } from '../redux/app.action';

function TodoForm() {
  const dispatch = useDispatch();
  console.log('todoform')

  function handleAddTodo() {
    const todoItem = {
      id: Date.now(),
      title: `Todo Item ${Date.now()}`,
    }
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(addTodo(todoItem))
      dispatch(setLoading(false));
    }, 1000);

  }

  return (
    <div><button type='button' onClick={handleAddTodo}>Add Todo</button></div>
  )
}

export default TodoForm