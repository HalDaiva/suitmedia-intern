import styles from './pagination.module.css'
import Link from "next/link";

export default function Pagination({ meta, currentPage, setCurrentPage }) {
    return(
        <div className={styles.pagination}>
            <div onClick={currentPage === 1 ? null : () => {setCurrentPage(1)}}
                 className={`${styles.chevron} ${currentPage === 1 ? styles.disabled : ''}`}>
                <i className='bx bx-chevrons-left'></i>
            </div>
            <div onClick={currentPage === 1 ? null : () => {setCurrentPage(currentPage - 1)}}
                 className={`${styles.chevron} ${currentPage === 1 ? styles.disabled : ''}`}>
                <i className='bx bx-chevron-left'></i>
            </div>
            <div className={styles.pageNumbers}>
                {meta && meta.links.map((page, index) => (
                    (index === 0 || index === meta.links.length - 1) ? null :
                    <div onClick={ page.label !== "..." ? () => {setCurrentPage(parseInt(page.label))} : () => null}
                         key={index}
                         className={ `${ page.label !== "..." ? styles.pageNumber : null} ${page.active ? styles.selected : ''}`}>
                        {page.label}
                    </div>
                ))}
            </div>
            <div onClick={currentPage === meta.last_page ? null : () => {setCurrentPage(currentPage + 1)}}
                 className={`${styles.chevron} ${currentPage === meta.last_page ? styles.disabled : ''}`}>
                <i className='bx bx-chevron-right'></i>
            </div>
            <div onClick={currentPage === meta.last_page ? null : () => {setCurrentPage(meta.last_page)}}
                 className={`${styles.chevron} ${currentPage === meta.last_page ? styles.disabled : ''}`}>
                <i className='bx bx-chevrons-right'></i>
            </div>
            {/*<Link href={'/ideas?page=1'} className={`${styles.chevron} ${currentPage === meta.last_page ? styles.disabled : ''}`}>*/}
            {/*    <i className='bx bx-chevrons-right'></i>*/}
            {/*</Link>*/}
        </div>
    )
}