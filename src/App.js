import React    from 'react'

import { connect } from 'react-redux'

import './App.scss'

const App = ({
  messages,
  messageInput,
  username,
  setMessageInput,
  setUsername,
  submitMessage
}) =>
  <div
    style={
      {margin: 'auto', width: '40%', borderWidth: '1px', borderColor: '#000', borderStyle: 'solid'}
    }
  >

    <div style={{height: '220px', width: '100%', overflowY: 'auto'}}>
      {messages.map(msg => (
        <div>{msg.message}</div>
      ))}
    </div>
    <input
      placeholder="username"
      onChange={(e) => {setUsername(e.target.value)}}
    />
    <input
      value={messageInput}
      type="text"
      onChange={(e) => {setMessageInput(e.target.value)}}
    />
    <button onClick={() => {submitMessage(messageInput)}}>
      Send
    </button>
  </div>

const mapStateToProps = state =>({
  ...state
})

const mapDispatchToProps = dispatch => ({
  submitMessage   : (message)      => dispatch({type: 'SUBMIT_MESSAGE', message}),
  setMessageInput : (messageInput) => dispatch({type: 'SET_MESSAGE_INPUT', messageInput}),
  setUsername     : (username)     => dispatch({type: 'SET_USERNAME', username})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
