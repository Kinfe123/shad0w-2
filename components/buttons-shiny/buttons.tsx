import styles from './buttons.module.css'
type BtnProps = {
    title: string
}
 const Buttons = (props: BtnProps) => {
    return (
        <div className={styles.button}>
            <p className='text-white'>{props.title}</p>
        </div>
    )
}

export default Buttons