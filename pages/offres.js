import Head from "next/head";
import PageContent from "../components/sections/home/offer/Offer";
import Banner from "../components/sections/offres/banner/Banner";
import Concept from "../components/sections/offres/concept/Concept";
export default function Offres () {

    const modular = {
        icon : "/assets/illustration/bag.svg",
        label: "Choisissez ce qui composera votre site internet.",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula nec augue aliquam, non interdum ante rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        button: {
          link: "/showcase/themes",
          text: "Showcase",
        },
        img : [
          
          {
            src: "/assets/illustration/layout.png",
            leftImg: "55%",
          },
          {
            src: "/assets/illustration/runningbox.png",
            leftImg: "50%",
            width: "40%"
          },
        ],
        left: "15%",
        
      }

  return (
    <div>
      <Head>
        <title>Modular Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{background: "#16141c"}}>
          <Banner/>
          <Concept/>
          <PageContent content={modular} key="1"/>
      </main>
    </div>
  );
}