"use client"

import styles from './page.module.css';

import Banner from "@/ui/banner";
import Content from "@/ui/content";
import Filter from "@/ui/filter";
import {useEffect, useRef, useState} from "react";
import Card from "@/ui/card";
import Pagination from "@/ui/pagination";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import SkeletonCard from "@/ui/skeletonCard";

export default function IdeasPage() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const targetRef = useRef(null);
    const mountedUseEffect = useRef(false);

    const urlPage = parseInt(searchParams.get('page'));
    const urlShow = parseInt(searchParams.get('show'));
    const urlSort = parseInt(searchParams.get('sort'));

    const [sort, setSort] = useState(urlSort || '-published_at');
    const [showPerPage, setShowPerPage] = useState(urlShow || 10);
    const [currentPage, setCurrentPage] = useState(urlPage || 1);
    const [contents, setContents] = useState([]);
    const [pagination, setPagination] = useState({links: []});
    const [isLoading, setIsLoading] = useState(true);

    const imageUrl = 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg';
    const title = 'Ideas';
    const subtitle = 'Where all out great things begin';

    useEffect(() => {
        setCurrentPage(urlPage || 1);
    }, [urlPage]);

    useEffect(() => {
        setShowPerPage(urlShow || 10);
    }, [urlShow]);

    useEffect(() => {
        setSort(urlSort || '-published_at');
    }, [urlSort]);

    const images = ["https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg"
    ]

    const fetchContents = async () => {
        console.log(sort);
        // const ideasRes = await fetch(api,
        setIsLoading(true);
        const ideasRes = await fetch(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${showPerPage}&append[]=small_image&append[]=medium_image&sort=${sort}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            });
        const ideas = await ideasRes.json();
        setIsLoading(false);
        console.log(pagination);
        setContents(ideas.data);
        setPagination(ideas.meta);
    }

    useEffect(() => {
        fetchContents();

        if(!mountedUseEffect.current){
            mountedUseEffect.current = true;
            return;
        }

        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString())
        router.push(`ideas?page=${currentPage}&show=${showPerPage}&sort=${sort}`, {scroll: false})
        targetRef.current?.scrollIntoView({behavior: "smooth"});

    }, [sort, showPerPage, currentPage]);

    return (
        <div>
            <Banner title={title} subtitle={subtitle} image={imageUrl}/>
            <div className={styles.scrollRef} ref={targetRef}></div>
            <Content>
                <div className={styles.topbar}>
                    <div>
                        Showing {pagination.from || 0} - {pagination.to || 0} of {pagination.total || 0}
                    </div>
                    <div>
                        <Filter showPerPage={showPerPage} setShowPerPage={setShowPerPage} sort={sort}
                                setSort={setSort}/>
                    </div>
                </div>
                <div className={styles.cardGrid}>
                    {isLoading ?
                        [...Array(parseInt(showPerPage))].map((_, index) => (
                            <SkeletonCard key={index}/>
                        ))
                        : contents.map((content, index) => (
                            <Card key={content.id} title={content.title} date={content.published_at}
                                  href={`/ideas/${content.slug}`}
                                  // thumbnail={images[index % 3]}/>
                                  thumbnail={`https://picsum.photos/seed/${content.id}/300/200`}/>
                        ))}

                </div>
                <div className={styles.bottombar}>
                    <Pagination meta={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>
            </Content>
        </div>
    )
}