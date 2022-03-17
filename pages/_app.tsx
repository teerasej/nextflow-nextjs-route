import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/main-layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
