import Navbar from '../components/global/navbar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
