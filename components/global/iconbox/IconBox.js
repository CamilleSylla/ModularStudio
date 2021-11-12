import style from './iconbox.module.scss'

export default function IconBox ({url}) {

    return (
<div className={style.icon}>
                 <img src={url}/>
             </div>
    )
}