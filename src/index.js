import React    from 'react'
import ReactDOM from 'react-dom'

const App = ({title}) =>
  <h1>{title}</h1>


const render = () => {
  ReactDOM.render(
    <App title="App" />,
    document.getElementById('app')
  )
}

render()
