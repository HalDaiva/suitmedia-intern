import styles from './content.module.css'

export default function Content({children}) {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>

    )
}