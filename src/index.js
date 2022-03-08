import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  page: 9,
  searchQuery: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEXT_PAGE": {
      return {...state, page: state.page + 1}
    }
    case "PREV_PAGE": {
      return {...state, page: state.page - 1}
    }
    case "FIRST_PAGE": {
      return {...state, page: 1}
    }
    case "SET_PAGE": {
      return {...state, page: action.payload}
    }
    default: 
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
