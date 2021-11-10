import style from './button.module.scss'
import Link from 'next/link'

export default function Button ({text, link, marginTop}) {

    return (
        <Link href={link ? link : "#"}>
            <button style={{marginTop: `${marginTop ? marginTop : "5vh"}`}} className={style.wrapper}>{text}</button>
        </Link>
    )
}