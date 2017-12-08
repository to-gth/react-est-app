import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { createStore } from 'redux'
import rootReducer from './reducers'
import ReduxedApp from './containers/ReduxedApp';
import { Provider } from 'react-redux'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ReduxedApp />
  </Provider>,
  document.getElementById('root')
);
