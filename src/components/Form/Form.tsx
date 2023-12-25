import React from 'react'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.form_wrapper}>
        <input className={styles.input} />
        <button className={styles.btn}>Save</button>
      </div>
    </form>
  )
}

export default Form
