import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Home page</h1>
      <p className={styles.text}>home page details</p>
      <Link href="/ninja"><a className={styles.btn}>see Ninja List</a></Link>
    </div>
  )
}
