import React from 'react'
import styles from './TodoList.module.scss'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilClipboard, cilTrash } from '@coreui/icons'

const TodoList = ({ todos, setTodos, setEditTodo }: any) => {
  const handleDelete = ({ id }: any) => {
    setTodos(todos.filter((item: any) => item.id !== id))
  }

  const handleComplete = (todo: any) => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const handleEdit = ({ id }: any) => {
    const findTodo = todos.find((item: any) => item.id === id)
    setEditTodo(findTodo)
  }

  return (
    <div className={styles.todoList}>
      {todos.map((item: any) => (
        <li className={styles.item} key={item.id}>
          <input
            type="text"
            value={item.title}
            className={styles.input}
            onChange={(e) => e.preventDefault()}
          />

          <div className={styles.btns}>
            <button
              className={`${styles.btn} ${styles.btn_trash}`}
              onClick={() => handleDelete(item)}
            >
              <CIcon icon={cilTrash} size="xl" />
            </button>
            <button
              className={`${styles.btn} ${styles.btn_note}`}
              onClick={() => handleEdit(item)}
            >
              <CIcon icon={cilClipboard} size="xl" />
            </button>
            <button
              className={`${styles.btn} ${styles.btn_check}`}
              onClick={() => handleComplete(item)}
            >
              <CIcon icon={cilCheckCircle} size="xl" />
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
