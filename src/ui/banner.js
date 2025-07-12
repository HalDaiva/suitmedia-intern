import Image from "next/image";
import styles from './banner.module.css'
import {useEffect, useState} from "react";

export default function Banner({title, subtitle, image}) {

    const [parallaxOffset, setParallaxOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentYPos = window.scrollY;
            setParallaxOffset(currentYPos * 0.4);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)}
    }, []);

    return(
        <div className={styles.banner}>
            <Image
                src={image}
                alt="Ideas Banner"
                fill={true}
                style={{objectPosition: `center ${parallaxOffset}px`}}
            />
            <div className={styles.title}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}