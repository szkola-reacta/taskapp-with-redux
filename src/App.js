import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Form, List } from './components/Todo';

import tasksReducer from './components/Todo/state';

const store = createStore(
  combineReducers({
    tasks: tasksReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// read: getState
// write: reducers
console.log(store.getState());
// store.dispatch(add('Zmyć naczynia'))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    </div>
  );
}

export default App;
