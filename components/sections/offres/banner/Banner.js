import IconBox from '../../../global/iconbox/IconBox'
import style from './banner.module.scss'

export default function Banner () {

    const Illustration = () => {
        return (
            <div className={style.illustration}>
                <img src="/assets/illustration/working.png"/>
            </div>
        )
    }

    const Title = () => {

        return (
            <div className={style.title}>
                <div className={style.container}>
                    <IconBox url="/assets/illustration/crayon.png"/>
                    <div style={{marginTop: "3vh"}}/>
                    <span>nos offres</span>
                    <h1>Creation de votre site internet !</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit,</p>
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Illustration/>
            <Title/>
        </section>
    )
}