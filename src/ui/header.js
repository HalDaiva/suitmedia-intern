"use client";

import styles from './header.module.css'
import Image from "next/image";
import Link from "next/link";
import Content from "@/ui/content";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function Header() {

    const pathname = usePathname();
    const headerLimit = 150

    const [showHeader, setShowHeader] = useState(true);
    const [transparentHeader, setTransparentHeader] = useState(false)
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentYPos = window.scrollY;

            if(currentYPos > lastYPos && currentYPos > headerLimit){
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            if (currentYPos > headerLimit) {
                setTransparentHeader(true);
            } else {
                setTransparentHeader(false);
            }

            setLastYPos(currentYPos);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {window.removeEventListener('scroll', handleScroll)}

    }, [lastYPos]);

    const navigations = [
        {name: 'Work', href: '/work'},
        {name: 'About', href: '/about'},
        {name: 'Services', href: '/services'},
        {name: 'Ideas', href: '/ideas'},
        {name: 'Careers', href: '/careers'},
        {name: 'Contact', href: '/contact'},
    ]

    return(
        <div className={`${styles.header} ${!showHeader ? styles.hideHeader : ''} ${transparentHeader ? styles.transparentHeader : ''}`}>
            <Content>
                <div className={styles.content}>
                    <Link href="/">
                        <Image
                            src="/suitmedia.webp"
                            alt="Suitmedia Logo"
                            height={50}
                            width={124}
                        />
                    </Link>
                    <ul className={styles.navigation}>
                        {navigations.map((navigation, index) => (
                            <li key={index}><Link href={navigation.href} className={pathname === navigation.href ? styles.onPage : null}>{navigation.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </Content>
        </div>
    )
}