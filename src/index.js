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
  <div
    style={
      {margin: 'auto', width: '40%', borderWidth: '1px', borderColor: '#000', borderStyle: 'solid'}
    }
  >

    <div style={{height: '220px', width: '100%', overflowY: 'auto'}}>
    {state.messages.map(msg => (
        <div>{msg.message}</div>
    ))}
      </div>
      <input
        placeholder="username"
        onChange={(e) => {store.dispatch({type: 'SET_USERNAME', username: e.target.value})}}
      />
    <input
      value={state.messageInput}
      type="text"
      onChange={(e) => {store.dispatch({type: 'SET_MESSAGE_INPUT', messageInput: e.target.value})}}
    />
    <button onClick={() => {store.dispatch({type: 'SUBMIT_MESSAGE', message: state.messageInput})}}>
      Send
    </button>
  </div>

store.subscribe(() => {
  ReactDOM.render(
    <App state={store.getState()} />,
    document.getElementById('app')
  )
})
