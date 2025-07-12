import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image"

export default function Home() {
    return(
        <div className={styles.home}>
            <Image
                src="/suitmedia-orange.webp"
                alt="Suitmedia Logo"
                width={246}
                height={99}
            />
            <h1>Welcome to Suitmedia</h1>
            <p>We are a digital agency that helps you to grow your business. Check our amazing ideas <Link href='/ideas'>here</Link></p>
            <p className={styles.credit}>By Halilintar Daiva Dirgantara</p>
        </div>
    )
}