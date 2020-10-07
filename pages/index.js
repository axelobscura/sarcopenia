import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>1<sup>er</sup> Simposio de Sarcopenia y Fragilidad</h1>
        <hr/>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '30px'}}>22 y 23 de octubre, 2020</h1>
        <h3 style={{ textAlign: 'center', fontWeight: '100'}}>COSTO: $500.00<br/>CONSTANCIA CON VALOR CURRICULAR</h3>
        <hr/>
        <Link href="/paquetes">
          <button type="button" className="btn btn-primary">CONSULTAR NUESTROS PAQUETES</button>
        </Link>
    </Layout>
  )
}
