import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import style from './illustration.module.scss'

export default function Illustration ({illustration}) {

    const laptop = useRef()
    const phone = useRef()
    const tablette = useRef()
    const wrapper = useRef()

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        console.log(phone.current.offsetLeft);

        gsap.to(phone.current, {
            x : "-=50%",
            y: "+=20%",
            scrollTrigger : {
                trigger: wrapper.current,
                start: () => `+=${(phone.current.offsetLeft + phone.current.offsetWidth)*2.5}` ,
                end: () => `+=200%` ,
                markers: true,
                scrub: .5,
            }
        })
        gsap.to(laptop.current, {
            x : "+=50%",
            y: "+=5%",
            scrollTrigger : {
                trigger: wrapper.current,
                start: () => `+=${(phone.current.offsetLeft + phone.current.offsetWidth)*2.5}` ,
                end: () => `+=200%` ,
                scrub: .5,
            }
        })
        gsap.to(tablette.current, {
            y: "-=25%",
            scrollTrigger : {
                trigger: wrapper.current,
                start: () => `+=${(phone.current.offsetLeft + phone.current.offsetWidth)*2.5}` ,
                end: () => `+=200%` ,
                scrub: .5,
            }
        })

    }, [])

    return (
        <div ref={wrapper} className={style.wrapper}>
            <img ref={laptop} src={illustration.laptop} className={style.laptop}/>
            <img ref={phone} src={illustration.phone} className={style.phone}/>
            <img ref={tablette} src={illustration.tablette} className={style.tablette}/>
        </div>
    )
}