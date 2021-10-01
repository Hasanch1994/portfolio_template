import Head from 'next/head'
import Skilss from '../../components/skills/Skills'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Skills</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Skilss />


        </main>
    )
}
