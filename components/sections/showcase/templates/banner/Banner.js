import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import style from './banner.module.scss'

export default function Banner ({title, label, background}) {

    const textRef = useRef()
    const wrapper = useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(textRef.current, {
            x : "+=20%",
            
            duration: 1,
            scrollTrigger: {
                start: "top top",
                end: "bottom top",
            markers: true,
                trigger: wrapper.current,
                scrub: true,
              }
        })

    }, [])

    return (
        <section ref={wrapper} style={{background : `url(${background})`, backgroundSize: "cover"}} className={style.wrapper}>
            <div ref={textRef}>
            <p>{label}</p>
            <h1>{title}</h1>
                </div>
            <div className={style.filter}/>
        </section>
    )
}