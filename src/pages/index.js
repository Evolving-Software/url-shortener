import Head from 'next/head'
import URLComponent from '../components/URLComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Evolving URLs</title>
        <meta name="description" content="A url shortener" />
        
      </Head>

    <h1 className="text-4xl" >Evolving URLs</h1>

      
    <URLComponent />

    </div>
  )
}
