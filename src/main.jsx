import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// store
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)


/* step to step to add new state into store
- create reducer
- create action creator
- add reducer into store
*/

/* step to step to update state in store
- create action creator
- create reducer
*/

/* curry function sum(2)(3)(4) = 9
closure function
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}


*/