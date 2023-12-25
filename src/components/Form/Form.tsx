import React from 'react'
import styles from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ input, setInput, todos, setTodos }: any) => {
  const onSubmit = (e: any) => {
    e.preventDefault()
    setTodos([...todos], { id: uuidv4(), title: input, completed: false })
    setInput('')
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn}>Save</button>
      </div>
    </form>
  )
}

export default Form
