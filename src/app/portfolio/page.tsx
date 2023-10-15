import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Works</h1>
            <div className={styles.content}>
                <p className={styles.choose}>Choose a gallery</p>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <Image
                            alt=''
                            src='/illustration.png'
                            fill={true}
                            className={styles.img}
                        />
                        <p className={styles.text}>Illustration</p>
                    </div>
                    <div className={styles.item}>
                        <Image
                            alt=''
                            src='/websites.jpg'
                            fill={true}
                            className={styles.img}
                        />
                        <p className={styles.text}>Websites</p>
                    </div>
                    <div className={styles.item}>
                        <Image
                            alt=''
                            src='/apps.jpg'
                            fill={true}
                            className={styles.img}
                        />
                        <p className={styles.text}>Applications</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
