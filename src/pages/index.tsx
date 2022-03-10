import Head from 'next/head'
import URLForm from '../components/URLForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evolving URLs</title>
        <meta name="description" content="A url shortener" />

      </Head>

      <h1 className="text-4xl" >Evolving URLs</h1>


      <URLForm />

    </div>
  )
}
