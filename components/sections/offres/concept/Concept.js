import Card from '../../../global/card/Card'
import CenteredTitle from '../../../global/centeredTitle/CenteredTitle'
import style from './concept.module.scss'

export default function Concept () {
    const data = [
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
        {
            title: "Vous mettre en avant",
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.",
            icon: "/assets/icon/shop.svg"
        },
    ]

    

    const CardDisplayer = () => {
        return (
            <div className={style.card_wrapper}>
                {data.map((el, i) => {
                    return <Card data={el} i={i}/>
                })}
            </div>
        )
    }

    return (
    <section className={style.wrapper}>
        <CenteredTitle title="Lorem ipsum dolor sit amet," label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum."/>
        <CardDisplayer/>
    </section>
    )
}