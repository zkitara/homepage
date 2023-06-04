// import '@/styles/globals.css'
import '@/styles/assets/css/plugins/fontawesome.min.css'
import '@/styles/assets/css/plugins/bootstrap.min.css'
import '@/styles/assets/css/plugins/lightgallery.min.css'
import '@/styles/assets/css/plugins/slick.css'
import '@/styles/assets/css/plugins/animate.css'
import '@/styles/assets/css/style.css'
import '@/styles/assets/css/theme_8.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
