import React from 'react'
import styles from '../styles/shopboard.module.css'
import Image from  'next/image'
import Link from 'next/link'


export default function shopboard({modelLogo}) {
    return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.context}>
                <div className={styles.starDecor}></div>
                <div className={styles.starDecor2}></div>
                <div className={styles.starDecor3}></div>
                <div className={styles.starDecor4}></div>
                <h1>LET'S</h1>
                <h1>EXPLORE</h1>
                <h1>UNIQUE</h1>
                <h1>CLOTHES.</h1>
                <p>Live for Influential and Innovative fashion!</p>
                    <div>
                        <div><Link href='/#'>Shop Now</Link></div>
                    </div>
            </div>  
            <div className={styles.imgcontainer}>
                <Image 
                    src={modelLogo}
                    alt="Picture of the model"
                ></Image>
            </div>
        </div>

    </div>
    )
}
