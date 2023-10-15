import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Let&apos;s Keep in Touch</h1>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        fill={true}
                        alt=''
                        src='/contact.png'
                        className={styles.img}
                    />
                </div>
                <div className={styles.formContainer}></div>
            </div>
        </div>
    );
}
