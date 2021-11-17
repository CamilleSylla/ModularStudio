import style from './card.module.scss'

export default function Card ({data, i}) {
    return (
        <article key={i} className={style.card}>
                <div className={style.container}>
                    <img src={data.icon}/>
                    <div>
                        <h1>{data.title}</h1>
                        <div className={style.seperator}/>
                        <p>{data.label}</p>
                    </div>
                </div>
            </article>
    )
}