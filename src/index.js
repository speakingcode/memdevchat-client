import React    from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import io from 'socket.io-client'


const store = createStore(
  (state = {}, action) => action.newState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const socket = io.connect('http://localhost:8090')
socket.on('NEW_STATE', newState => {
  console.log('NEW STATE', newState)
  store.dispatch({type: 'NEW_STATE', newState})
})


const App = ({title}) =>
  <h1>{title}</h1>


store.subscribe(() => {
  ReactDOM.render(
    <App title="App" />,
    document.getElementById('app')
  )
})
