import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <Layout>
      <Head>
        <title>Eliot Rhys</title>
      </Head>
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default MyApp
