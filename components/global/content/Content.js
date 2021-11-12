import Button from '../button/Button'
import IconBox from '../iconbox/IconBox';
import style from './content.module.scss'

export default function Content ({data, left}) {
    console.log(data.button.text);
    return (
        <div style={{left: `${left ? left : '60%'}`}}  className={style.wrapper}>
             <IconBox url={data.icon}/>
             <h1> {data.label} </h1>
             <p> {data.para} </p>
             <Button marginTop="10vh" text={data.button.text} link={data.button.link}/>
        </div>
    )
}