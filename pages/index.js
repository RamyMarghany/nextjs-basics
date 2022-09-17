import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}> Home page</h1>
        <p className={styles.text}>home page details</p>
        <Link href="/ninja"><a className={styles.btn}>See Ninja List</a></Link>
      </div>
    </>
  )
}
