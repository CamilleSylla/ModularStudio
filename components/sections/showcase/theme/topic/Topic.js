import Button from '../../../../global/button/Button'
import style from './topic.module.scss'

export default function Topic ({ data})  {
    const theme = data.theme

    const Title = () => {
        return (
            <div className={style.title}>
                <span>
                    <div style={{border : `4px solid ${theme.color}`}}>
                        {data.category}
                    </div>
                    </span>
                <h1> {data.label} </h1>
                <Button text="Consulter"/>
            </div>
        )
    }

    const Illustration = () => {

        return (
            <div className={style.illustration}>
                <img style={{background: `url(${data.ipadImg})`,backgroundPositionY: "28%", backgroundRepeat: "no-repeat", backgroundSize: "95%"}} src="/assets/illustration/ipad.png"/>
            </div>
        )
    }

    return (
        <section style={{background: `${theme.background}`, color: `${theme.color}`}} className={style.wrapper}>
            <Title/>
            <Illustration/>
        </section>
    )
} 