import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>1er Simposio de Sarcopenia y Fragilidad</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>1<sup>er</sup> Simposio de Sarcopenia y Fragilidad</h1>
        <hr/>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '30px'}}>22 y 23 de octubre, 2020</h1>
        <h3 style={{ textAlign: 'center', fontWeight: '100'}}>COSTO: $500.00<br/>CONSTANCIA CON VALOR CURRICULAR</h3>
        <hr/>
        <button type="button" className="btn btn-primary">CONSULTAR NUESTROS PROGRAMAS</button>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://capuletbeta.com/sarcopenia/images/logo-light.png" alt="Vercel Logo" className={styles.logo} style={{ height: '50px', background: '#111', padding: '5px 20px'}} />
        </a>
      </footer>
    </div>
  )
}
