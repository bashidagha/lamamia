import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

export default function Butoon({ text, url }) {
    return (
        <Link href={url}>
            <button className={styles.container}>{text}</button>
        </Link>
    );
}
