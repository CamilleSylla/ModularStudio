import Content from '../../../global/content/Content'
import style from './offer.module.scss'

export default function PageContent ({content, i}) {

    

    return (
        <section key={i} className={style.wrapper}>
            <img style={{left: `${content.leftImg}`}} src={content.img}/>
            <Content left={content.left} data={content}/>
        </section>
    )
}