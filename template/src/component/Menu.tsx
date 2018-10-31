import React from 'react'
import styles from './styles.scss'

class Menu extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.menu}>
        <h1>Menu here</h1>
        <div className={styles.red}>red</div>
      </div>
    )
  }
}

export default Menu
