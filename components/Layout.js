import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>1er Simposio de Sarcopenia y Fragilidad</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css"></link>
            </Head>
            <main className={styles.main}>
                {children}
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
  
  export default Layout