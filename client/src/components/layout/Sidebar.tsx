'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from './Sidebar.module.scss';

const NAV_ITEMS = [
  { href: '/dashboard',        label: 'Dashboard',       Icon: DashboardIcon },
  { href: '/stocks',           label: 'Markets',         Icon: TrendingUpIcon },
  { href: '/recommendations',  label: 'AI Picks',        Icon: AutoAwesomeIcon },
  { href: '/portfolio',        label: 'Portfolio',       Icon: AccountBalanceWalletIcon },
  { href: '/watchlist',        label: 'Watchlist',       Icon: BookmarkIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandIcon}>M</span>
        <span className={styles.brandName}>MarketMind</span>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.navItem} ${pathname.startsWith(href) ? styles.active : ''}`}
          >
            <Icon className={styles.navIcon} fontSize="small" />
            <span className={styles.navLabel}>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
