import Form from '@/components/Form/Form'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.header}>MY TO DO LIST</h1>
        <Form />
        {/* <TodoList/> */}
      </div>
    </main>
  )
}
