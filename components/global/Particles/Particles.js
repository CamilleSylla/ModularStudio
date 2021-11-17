import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import config from './particlesjs-config.json'

export default function ParticleBackground (props) {

    const [documentHeight, setDocumentHeight] = useState(null)
    const route = useRouter()
    useEffect(() => {
        const height = document.body.offsetHeight
        setDocumentHeight(`${height}px`)
    }, [route])
    if (!documentHeight) {
        return <p>loading</p>
    } else {
        return (
                <Particles params={config} height={documentHeight} width="100%" style={{position: "absolute"}}/>
        );
    }
  
        

}