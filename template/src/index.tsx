import React from 'react'
import ReactDOM from 'react-dom'

import Title from './component/Title'

import imageUrl from './assets/meme.png'
import styles from './styles/styles.scss'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Title />
        <p className={styles.content}>have fun 😜</p>
        <img src={imageUrl} alt='meme' />
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
