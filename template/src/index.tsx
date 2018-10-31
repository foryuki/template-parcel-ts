import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './component/Menu'
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Menu />
        <div>Rice here</div>
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
