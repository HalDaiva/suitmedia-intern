import styles from './skeletonCard.module.css'

export default function SkeletonCard({title, date, thumbnail}) {

    return(
        <div className={styles.card}>
            <div className={styles.thumbnail}>
                <div className={`${styles.imageSkeleton} skeleton`}></div>
            </div>
            <div className={styles.details}>
                <div className={styles.date}>
                    <div className={`${styles.dateSkeleton} skeleton`}></div>
                </div>
                <div className={styles.title}>
                    <div className={`${styles.titleSkeleton} skeleton`}></div>
                    <div className={`${styles.titleSkeleton} skeleton`}></div>
                    <div className={`${styles.titleSkeleton} ${styles.titleSkeletonLast}`}></div>
                </div>
            </div>
        </div>
    )
}