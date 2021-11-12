import IconBox from '../../../../global/iconbox/IconBox'
import style from './banner.module.scss'

export default function Banner () {

    const Title = () => {

        return (
            <div className={style.title}>
                <IconBox url='/assets/illustration/crayon.png'/>
                <h1>Inspirer, Creer, Adapter,<br/>Notre mission est de vous accompagnez.</h1>
            </div>
        )
    }


    const Illustration = () => {

        return (
            <div className={style.illustration}>
                <img src='/assets/illustration/code3d.svg' className={style.first_img}/>
                <img src='/assets/illustration/desc.svg' className={style.second_img}/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title/>
            <Illustration/>
        </section>
    )
}