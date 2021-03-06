import Head from 'next/head'
import Portfolio from '../../components/portfolio/Portfolio'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Portfolio />

        </main>
    )
}
