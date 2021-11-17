import style from './centeredtitle.module.scss'

export default function CenteredTitle ({title, label}) {

    return (
        <div className={style.wrapper}>
            <h1>{title}</h1>
            <p> {label} </p>
        </div>
    )
}