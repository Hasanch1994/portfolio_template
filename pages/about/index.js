import Head from 'next/head'
import About from '../../components/about/About'

export default function Home() {
    return (
        <main>
            <Head>
                <title>About me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <About />

        </main>
    )
}
