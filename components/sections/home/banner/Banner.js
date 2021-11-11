import Blur from '../../../global/blur/Blur'
import Button from '../../../global/button/Button'
import style from './banner.module.scss'

export default function Banner () {

    const Illustration = () => {
        return (
            <div className={style.illustration}>
                <img className={style.computer} src={"/assets/illustration/laptop.svg"}/>
                <img className={style.perso} src={"/assets/illustration/perso.svg"}/>
                <img className={style.notification} src={"/assets/illustration/notification.svg"}/>
            </div>
        )
    }


    const Text = () => {

        return (
            <div className={style.text}>
                <h1><span>Louer</span> votre site <span>simplement</span> </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis mollis massa, in ornare urna gravida id.</p>
                <Button text="Découvrir"/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Text/>
            <Illustration/>
            {/* <img src='/assets/illustration/banner.svg'/> */}
            <Blur/>
            <div className={style.gradient}/>
        </section>
    )
}