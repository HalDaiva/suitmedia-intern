import styles from './card.module.css'
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

export default function Card({title, date, thumbnail, href}) {

    const formattedDate = dayjs(date).format('DD MMMM YYYY');

    return(
        <Link href={href}>
            <div className={styles.card}>
                <div className={styles.thumbnail}>
                    <Image
                        loading="lazy"
                        src={thumbnail}
                        alt="Ideas Banner"
                        // height={200}
                        // width={300}
                        fill={true}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.date}>
                        {formattedDate}
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    )
}