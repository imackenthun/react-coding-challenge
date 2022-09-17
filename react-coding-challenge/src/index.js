import React from 'react'
import ReactDOM from 'react-dom'
import MessageManager from './components/message-manager'

const NewApp = require('./components/message-manager').default

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp(MessageManager)

if (module.hot) {
  module.hot.accept('./components/message-manager', () => {
    renderApp(NewApp)
  })
}
