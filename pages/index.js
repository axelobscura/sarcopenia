import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>1<sup>er</sup> Simposio de Sarcopenia y Fragilidad</h1>
        <hr/>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold'}}>22 y 23 de octubre, 2020</h2>
        <h3 style={{ textAlign: 'center', fontWeight: '100'}}>COSTO: $500.00<br/>CONSTANCIA CON VALOR CURRICULAR</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
