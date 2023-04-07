import Link from 'next/link';

import styles from "./Layout.module.css";

const Layout = ({children})=>{
    return(
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>
                        sale Car with Next.js
                    </h2>
                    <p>
                        choose and buy car 
                    </p>
                </Link>
            </header>

            <div className={styles.container}>
                {children}
            </div>

            <footer className={styles.footer}>
                <a href="https://github.com/MostafaMousavi29" target="_blank">
                    this is site create by mostafa mousavi | project react and next &copy; 
                </a>
            </footer>
        </>
    )
}

export default Layout