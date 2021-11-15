import Illustration from '../illustration/Illustration'
import style from './presentation.module.scss'

export default function Presentation ({presentation, illustration}) {


    return (
        <section className={style.wrapper}>
            <article className={style.content}>
                <h1>{presentation.title}</h1>
                <div className={style.info}>
                    <div>
                        <h3>Disponible depuis :</h3>
                        <p>{presentation.creation}</p>
                        </div>
                    <div>
                        <h3>Les objectifs :</h3>
                        <p>{presentation.goal}</p>
                    </div>
                    </div>
            </article>
            <Illustration illustration={illustration}/>
        </section>
    )
}