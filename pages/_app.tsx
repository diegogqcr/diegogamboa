import 'ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../ui/layouts/layout.component'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App