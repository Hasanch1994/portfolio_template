import Head from 'next/head'
import Image from 'next/image'
import RightSide from '../components/common/rightside/RightSide'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Hasan Cheraghi</title>
        <meta name="description" content="Hasan cheraghi. android react developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RightSide />

    </main>
  )
}
