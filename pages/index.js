import Layout from '../components/Layout'
import { motion } from 'framer-motion';

import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .2,
          opacity: 0
        },
        visible: {
          scale: .9,
          opacity: 1,
          transition: {
            delay: .24
          }
        },
      }} whileHover={{
        position: 'relative',
        zIndex: 1,
        //background: 'white',
        scale: [1, 1.2, 1],
        //rotate: [0, 5, -5, 0],
        transition: {
          duration: .2
        }
      }}>
        <Link href="/paquetes">
          <h1 className={styles.title}>1<sup>er</sup> Simposio de Sarcopenia y Fragilidad</h1>
        </Link>
      </motion.div>
      <hr/>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '30px'}}>22 y 23 de octubre, 2020</h1>
      <h3 style={{ textAlign: 'center', fontWeight: '100'}}>COSTO: $500.00<br/>CONSTANCIA CON VALOR CURRICULAR</h3>
    </Layout>
  )
}
