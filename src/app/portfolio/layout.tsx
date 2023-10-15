import React from 'react';
import styles from './page.module.css';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Works</h1>
            {children}
        </div>
    );
}
