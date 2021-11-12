import BackShape from '../components/global/backShape/BackShape'
import Navbar from '../components/global/navbar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    {/* <BackShape/> */}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
