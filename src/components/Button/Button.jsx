import s from './Button.module.css';

export default function Button({onLoad}) {
    return (
        <div className={s.Button_container}>
            <button className={s.Button} type="button" onClick={onLoad}>Load more</button>
        </div>
    )
}