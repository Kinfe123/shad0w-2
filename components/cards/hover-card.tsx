import styles from './hover-card.module.css'

const HoverCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <p className={styles.city}>Hello world</p>

            </div>
            
        </div>
    )
}

export default HoverCard    