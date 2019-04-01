import React    from 'react'
import ReactDOM from 'react-dom'

import {
  createStore,
  applyMiddleware,
  compose
}                            from 'redux'

import io from 'socket.io-client'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  (state = {}, action) =>
    action.type === 'SET_NEW_STATE'
    ? action.newState
    : state,

  composeEnhancers(
    applyMiddleware(
      store => next => action => {
        console.log('sending action:', action)
        if (action.type === 'SET_NEW_STATE') {
          return next(action)
        }
        else {
          socket.emit('DISPATCH_CLIENT_ACTION', action)
          return next(action)
        }
      }
    )
  )
)

const socket = io.connect('http://localhost:8090')
socket.on('SET_NEW_CLIENT_STATE', newState => {
  console.log('Setting new state from server:', newState)
  store.dispatch({type: 'SET_NEW_STATE', newState})
})


const App = ({state}) =>
  <div>
    <h1>App</h1>

    <input
      value={state}
      type="text"
      onChange={(e) => {store.dispatch({type: 'SET_INPUT', payload: e.target.value})}}
    />
    <button onClick={() => {store.dispatch({type: 'SUBMIT_INPUT', payload: state})}}>
      Send action!
    </button>
  </div>

store.subscribe(() => {
  ReactDOM.render(
    <App state={store.getState()} />,
    document.getElementById('app')
  )
})
