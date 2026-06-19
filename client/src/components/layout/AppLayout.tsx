'use client';

import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import styles from './AppLayout.module.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.main}>
        <TopNav />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
