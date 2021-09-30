import Head from 'next/head'
import Image from 'next/image'
import RightSide from '../components/common/rightside/RightSide'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Hasan Chergahi</title>
        <meta name="description" content="حسن چراغی . مدرس  و برنامه نویس اندروید " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RightSide />


    </main>
  )
}
