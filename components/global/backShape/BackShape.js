import React, { useEffect, useRef, useState } from 'react'
import { generateRamdomPosition } from '../../../tools/global'
import style from './backshape.module.scss'

export default function BackShape ({children}) {

    const [loading, setLoading] = useState(true)
    const [layout, setLayout] = useState()
    const backShape = useRef()
    // const width = layout.offsetWidth
    // const height = layout.offsetHeight
    console.log();
    
    // const div =  backShape.current.appendChild(Circle())



    let circle =[]
const Circle = () => {
        const position = generateRamdomPosition(backShape.current.offsetWidth, backShape.current.offsetHeight)
        
        return (
            <div style={{left: position.positionX, top: position.positionY}} >
                A
            </div>
        )
    }

    for (let i = 0; i < 10 ; i++) {
        circle.push(<Circle/>)
    }

    

    return (
        <div ref={backShape} className={style.wrapper}>
            {circle}
        </div>
    )
}