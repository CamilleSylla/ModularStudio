import { useEffect, useRef, useState } from 'react'
import { generateRamdomPosition } from '../../../tools/global'
import style from './backshape.module.scss'

export default function BackShape ({children}) {

    const [loading, setLoading] = useState(true)
    const [layout, setLayout] = useState()
    const backShape = useRef()
    // const width = layout.offsetWidth
    // const height = layout.offsetHeight
    console.log();
    
    useEffect(() => {
        setLoading(!loading)
        setLayout(document.getElementsByTagName('body')[0])

    //    document.body.appendChild(<Circle/>)
        

    }, [])

    const Circle = () => {
        const position = generateRamdomPosition(layout.offsetWidth, layout.offsetHeight)
        
        return (
            <div style={{left: position.positionX, top: position.positionY}} >
                A
            </div>
        )
    }

    return (
        <div ref={backShape} className={style.wrapper}>
            {loading ? null : <Circle/>}
        </div>
    )
}