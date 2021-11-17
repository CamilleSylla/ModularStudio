import { useEffect } from 'react'
import BackShape from '../components/global/backShape/BackShape'
import Navbar from '../components/global/navbar/NavBar'
import ParticleBackground from '../components/global/Particles/Particles'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log(pageProps);
  }, [])
  return (
    <>
    <Navbar/>
    {/* <BackShape/> */}
    <ParticleBackground/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
