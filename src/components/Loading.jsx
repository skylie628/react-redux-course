import { useSelector } from "react-redux"

function Loading() {
  const  isLoading = useSelector(state => state.app.isLoading);

  if(!isLoading) return null;

  return (
    <div className='loader_container'>
      <div className="loader"></div>
    </div>
  )
}

export default Loading