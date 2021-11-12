import Content from '../../../global/content/Content'
import style from './offer.module.scss'

export default function PageContent ({content, i}) {

    

    return (
        <section key={i} className={style.wrapper}>
            {content.img.map((el, i) => {
                return             <img className={style.illustration} style={{width : `${el.width ? el.width : "30%"}`,left: `${el.leftImg}`}} src={el.src}/>

            })}
            <Content left={content.left} data={content}/>
        </section>
    )
}