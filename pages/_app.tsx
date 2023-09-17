import '@/styles/globals.css'
import '@/styles/MainPage.css'
import type { AppProps } from 'next/app'
import Store from '../Store/Store.js'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
  <Component {...pageProps} />
    </Provider>
  )
}
