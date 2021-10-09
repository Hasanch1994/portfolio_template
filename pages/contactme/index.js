import Head from 'next/head'
import ContactMe from '../../components/contactme/ContactMe'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactMe />

        </main>
    )
}
