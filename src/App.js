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
}) => (
  <div className="App">
  <div
    className='chat-area'
  >

    <div
      className='message-area'
    >
      {messages.map(msg => (
        <div>{msg.message}</div>
      ))}
    </div>
    <div
      className='input-area'
    >
    <input
      id="username-input"
      placeholder="username"
      onChange={(e) => {setUsername(e.target.value)}}
    />
    <button
      id="submit-message-button"
      onClick={() => {submitMessage(messageInput)}}>
      Send
    </button>

        <span
        className="fill-input-span">
    <input
      id="message-input"
      placeholder="message"
      value={messageInput}
      type="text"
      onChange={(e) => {setMessageInput(e.target.value)}}
    />
      </span>
  </div>
  </div>
    </div>
)

const mapStateToProps = state =>({
  ...state
})

const mapDispatchToProps = dispatch => ({
  submitMessage   : (message)      => dispatch({type: 'SUBMIT_MESSAGE', message}),
  setMessageInput : (messageInput) => dispatch({type: 'SET_MESSAGE_INPUT', messageInput}),
  setUsername     : (username)     => dispatch({type: 'SET_USERNAME', username})
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
