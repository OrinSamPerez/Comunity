import Head from 'next/head'
import IndexLogin from './Login/IndexLogin'
export default function Home() {
  return (
    <div>
      <Head>
        <title>News Comunity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <IndexLogin RutaRegistro="/registro"/>
      </main>


    </div>
      
  )
}
