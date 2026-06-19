'use client';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, IconButton, InputBase } from '@mui/material';
import styles from './TopNav.module.scss';

export default function TopNav() {
  return (
    <header className={styles.topnav}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} fontSize="small" />
        {/* TODO: LOGIC agent — wire stock symbol search */}
        <InputBase
          placeholder="Search stocks, ETFs..."
          className={styles.searchInput}
          inputProps={{ 'aria-label': 'search stocks' }}
        />
      </div>

      <div className={styles.actions}>
        {/* TODO: LOGIC agent — wire notification count badge */}
        <IconButton size="small" aria-label="notifications" className={styles.iconBtn}>
          <NotificationsNoneIcon fontSize="small" />
        </IconButton>

        {/* TODO: LOGIC agent — wire user session */}
        <Avatar className={styles.avatar} sx={{ width: 32, height: 32 }}>U</Avatar>
      </div>
    </header>
  );
}
