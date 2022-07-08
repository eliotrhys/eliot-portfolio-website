import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/images/memoji.png" />
          <meta name="description" content="Eliot Rhys - Best Dev Ever" />
          {/* <link rel="stylesheet" href="https://use.typekit.net/jrs6aqd.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Script src="https://kit.fontawesome.com/fecd077b7d.js" crossOrigin="anonymous"></Script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument