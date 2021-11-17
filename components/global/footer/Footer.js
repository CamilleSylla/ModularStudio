import Button from '../button/Button'
import style from './footer.module.scss'

export default function Footer () {

    const social = [
        {
            icon : "/assets/icon/insta.svg",
            url : "#"
        },
        {
            icon : "/assets/icon/fb.svg",
            url : "#"
        },

    ]

    const Devis = () => {
        return (
            <article className={style.devis}>
                <h1>Demander un devis simplement.</h1>
                <p>N'attendez plus et construisez vous une image sur internet !</p>
                <Button text="Contacter Modular Studio"/>
            </article>
        )
    }

    const Footer = () => {
        return (
            <footer className={style.footer}>
                <div className={style.container}>
                    <div>
                        <img src="/assets/logo.svg"/>
                        <p style={{marginTop: "2vh"}}>© 2019-2021. Tous droits réservés.</p>
                        <p>Développé avec ♥ à Saint-Quentin</p>
                    </div>
                    <div>
                        <h2>Une petite discution ?</h2>
                        <p style={{fontWeight: "800",marginTop: "3vh"}}><a>06 52 03 06 72</a></p>
                        <p style={{fontWeight: "800"}}><a>contact@mondularstudio.fr</a></p>
                    </div>
                    <div>
                        <h2>Vous chercher de l'inspiration ?</h2>
                        <p style={{fontWeight: "800",marginTop: "3vh"}}><a>Rendez vous au <span>Showcase !</span></a></p>
                    </div>
                    <div style={{textAlign: "right"}}>
                        <div className={style.social}>
                            {social.map((el, i) => {
                                return <img src={el.icon}/>
                            })}
                            </div>
                            <p style={{textAlign: "right", fontSize: ".8rem", fontWeight: "400", marginTop: "3vh"}}><a>Mentions légales</a></p>
                            <p style={{textAlign: "right", fontSize: ".8rem", fontWeight: "400"}}><a>Protection des données</a></p>
                            <p style={{textAlign: "right", fontSize: ".8rem", fontWeight: "400"}}><a>Utilisation des cookies</a></p>
                            <p style={{textAlign: "right", fontSize: ".8rem", fontWeight: "400"}}><a>Plan du site</a></p>
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <div className={style.wrapper}>
            <Devis/>
            <Footer/>
        </div>
    )
}