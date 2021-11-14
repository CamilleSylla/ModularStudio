import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import style from './banner.module.scss'

export default function Banner ({title, label, background}) {

    const imgRef = useRef()
    const wrapper = useRef()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let maxWidth = 0;
        const getMaxWidth = () => {
            maxWidth = 0;
            maxWidth += wrapper.current.offsetWidth;
        }
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        gsap.to(imgRef.current, {
            x: "+=40%",
            scale: "1.5",
            scrollTrigger: {
                trigger: wrapper.current,
                scrub: .5,
                start: 'top top',
                end: () => `+=${maxWidth}`,
                invalidateOnRefresh: true

              }
        })

    }, [])

    return (
        <section ref={wrapper} className={style.wrapper}>
            <img ref={imgRef}src={background} />
            <div>
            <p>{label}</p>
            <h1>{title}</h1>
                </div>
            <div className={style.filter}/>
        </section>
    )
}