import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.choose}>Choose a gallery</p>
                <div className={styles.items}>
                    <Link
                        href='/portfolio/illustrations'
                        className={styles.item}
                    >
                        <Image
                            alt=''
                            src='/illustration.png'
                            fill={true}
                            className={styles.img}
                        />
                        <span className={styles.text}>Illustration</span>
                    </Link>
                    <Link href='/portfolio/websites' className={styles.item}>
                        <Image
                            alt=''
                            src='/websites.jpg'
                            fill={true}
                            className={styles.img}
                        />
                        <span className={styles.text}>Websites</span>
                    </Link>
                    <Link
                        href='/portfolio/applications'
                        className={styles.item}
                    >
                        <Image
                            alt=''
                            src='/apps.jpg'
                            fill={true}
                            className={styles.img}
                        />
                        <span className={styles.text}>Applications</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
