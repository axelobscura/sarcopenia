import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>PAQUETES</h1>
        <Link href="/">
          <button type="button" className="btn btn-primary">INICIO</button>
        </Link>
    </Layout>
  )
}
