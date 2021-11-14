import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import style from './imgseperator.module.scss'

export default function ImgSeperator ({img}) {

    const wrapperRef = useRef()
    const animRef = useRef()

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        console.log(wrapperRef.current.offsetLeft, wrapperRef.current.offsetLeft + wrapperRef.current.offsetWidth);

        gsap.from(animRef.current, {
            x : "50%",
            scale: "2",
            scrollTrigger : {
                trigger: animRef.current,
                start: () => `+=${wrapperRef.current.offsetLeft}` ,
                end: () => `+=200%` ,
                scrub: .5,
            }
        })


    }, [])

    return (
        <section ref={wrapperRef} className={style.wrapper}>
            <img ref={animRef} className={style.seperator} src={img}/>
        </section>
    )
}