import style from './topic.module.scss'

export default function Topic ({ data})  {
    const theme = data.theme

    const Title = () => {
        return (
            <div className={style.title}>
                <span>
                    <div style={{border : `2px solid ${theme.color}`}}>
                        {data.category}
                    </div>
                    </span>
                <h1> {data.label} </h1>
            </div>
        )
    }

    return (
        <section style={{background: `${theme.background}`, color: `${theme.color}`}} className={style.wrapper}>
            <Title/>
        </section>
    )
} 