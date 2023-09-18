import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import LogoVector from '../assets/images/vectorLogo.png'
import Image from  'next/image'

export default function Navbar() {
    return( 
        <nav className={styles.container}>
                <div>
                    <span className={styles.logoTab}><Link href='/#'><Image src={LogoVector} height={20}></Image>FASHION</Link></span>
                </div>
                <div>
                    <span className={styles.rightTabs}><Link href='/#'>CATALOGUE</Link></span>
                    <span className={styles.rightTabs}><Link href="/#">FASHION </Link></span>
                    <span className={styles.rightTabs}><Link href='/#'>FAVORITE</Link></span>
                    <span className={styles.rightTabs}><Link href='/#'>LIFESTYLE</Link></span>
                    <span className={styles.rightTabs}><Link style={{backgroundColor: 'black', color: 'white'}} href='/api/auth/login'>SIGN UP</Link></span>
                </div>
            </nav>
    ); 
}








