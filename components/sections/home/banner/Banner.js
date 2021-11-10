import Blur from '../../../global/blur/Blur'
import Button from '../../../global/button/Button'
import style from './banner.module.scss'

export default function Banner () {


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
            <img src='/assets/illustration/banner.svg'/>
            <Blur/>
        </section>
    )
}