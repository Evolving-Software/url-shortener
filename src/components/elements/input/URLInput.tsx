import React from 'react'
import styles from './URLInput.module.scss'

type Props = {}

const URLInput = (props: Props) => {
  return (
    <input type="text" className={styles.URLInput} />
  )
}

export default URLInput;