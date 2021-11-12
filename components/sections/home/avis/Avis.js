import { checkElExistArray, RandomNumberInterval, shuffleArray } from '../../../../tools/showcase'
import Blur from '../../../global/blur/Blur'
import IconBox from '../../../global/iconbox/IconBox'
import style from './avis.module.scss'

export default function Avis () {

    const avis = [
        {
            img : "https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1618540156/photosp/371b7901-4b1f-453c-b3fb-ae40efb8f153/371b7901-4b1f-453c-b3fb-ae40efb8f153.jpg",
            client: "Jean Rondo",
            society: "Cloud Ink",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus in lectus viverra porta. Duis varius metus sit amet nisi placerat dignissim. In luctus felis et nisl blandit commodo. Duis pharetra orci sed varius varius. Suspendisse bibendum ac turpis id lacinia. Aliquam semper, nibh nec egestas accumsan, nibh quam scelerisque mi, vehicula convallis augue ligula ut diam. Fusce et sem orci. "
        },
        {
            img : "https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1618540156/photosp/371b7901-4b1f-453c-b3fb-ae40efb8f153/371b7901-4b1f-453c-b3fb-ae40efb8f153.jpg",
            client: "Maxime Duval",
            society: "Cloud Ink",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus in lectus viverra porta. Duis varius metus sit amet nisi placerat dignissim. In luctus felis et nisl blandit commodo. Duis pharetra orci sed varius varius. Suspendisse bibendum ac turpis id lacinia. Aliquam semper, nibh nec egestas accumsan, nibh quam scelerisque mi, vehicula convallis augue ligula ut diam. Fusce et sem orci. "
        },
        {
            img : "https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1618540156/photosp/371b7901-4b1f-453c-b3fb-ae40efb8f153/371b7901-4b1f-453c-b3fb-ae40efb8f153.jpg",
            client: "Camille Sylla",
            society: "Cloud Ink",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis purus in lectus viverra porta. Duis varius metus sit amet nisi placerat dignissim. In luctus felis et nisl blandit commodo. Duis pharetra orci sed varius varius. Suspendisse bibendum ac turpis id lacinia. Aliquam semper, nibh nec egestas accumsan, nibh quam scelerisque mi, vehicula convallis augue ligula ut diam. Fusce et sem orci. "
        },
    ]

    const Title = () => {
        return (
            <div className={style.title}>
                <IconBox url="/assets/icon/talk.png"/>
            <h1>Ce que nos clients pensent de Modular Studio</h1>
            <NextPrevious/>
            </div>
        )
    }

    const NextPrevious = () => {

        return (
            <div className={style.menu}>
                <div>{"<"}</div>
                <div>{">"}</div>
            </div>
        )
    }

    const Bubble = () => {
        return (
            <article className={style.opinion}>
                <div className={style.quote}>
                    <img src="/assets/icon/quote.svg"/>
                    </div>
                <img className={style.profile} src={avis[0].img}/>
                <h1>{avis[0].client}</h1>
                <h2>{avis[0].society}</h2>
                <p>{avis[0].text}</p>
            </article>
        )
    }

    function generateCharactersArray () {
        const result = []
        for (let i = 1; i <= 8; i++) {
            const randomTop = RandomNumberInterval(0, 30)
                result.push({top: `${randomTop}%`,src:`/assets/illustration/character/${i}.png`})
        }
        const shuffled = shuffleArray(result)
        return result
    }

    const Illustration = () => {
        return (
            <div className={style.illustration_wrapper}>
                {generateCharactersArray().map((el, i) => {
                    return <img src={el.src} style={{transform: `translate3d(0,${el.top}, 0)`}}/>
                })}
            </div>
        )
    }
    const Gradient = () => {
        return (
            <div className={style.gradient}/>
        )
    }
    return (
        <section className={style.wrapper}>
            <Gradient/>
            <Blur/>
            <Illustration/>
            <Title/>
            <Bubble/>
        </section>
    )
}