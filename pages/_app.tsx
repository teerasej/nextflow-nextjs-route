import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/main-layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import './../styles/nprogress.css'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url:string) => {
      console.log(`Loading: ${url}`)
      setTimeout(()=>{}, 3000)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])


  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
