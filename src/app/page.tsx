'use client'

import Form from '@/components/Form/Form'
import styles from './page.module.scss'
import TodoList from '@/components/TodoList/TodoList'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.header}>MY TO DO LIST</h1>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  )
}
