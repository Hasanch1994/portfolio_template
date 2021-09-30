import Head from 'next/head'
import Resume from '../../components/resume/Resume'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Resume</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Resume />

        </main>
    )
}
