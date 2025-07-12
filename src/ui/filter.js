import styles from './filter.module.css'
import {useState} from "react";

export default function Filter({showPerPage, setShowPerPage, sort, setSort}) {
    
    return(
        <div className={styles.container}>
            <div>Show per page: </div>

            <div className={styles.selectContainer}>
                <div className={styles.select}>
                    <select value={showPerPage} onChange={(e) => setShowPerPage(e.target.value)}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
            <div>Sort by: </div>
            <div className={styles.selectContainer}>
                <div className={styles.select}>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="-published_at">Newest</option>
                        <option value="published_at">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
