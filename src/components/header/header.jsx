import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as FilBondLogo } from '../../static/images/logo.svg'
import styles from './header.module.scss'

function Header() {
  return (
    <header className="layout">
      <div className={styles.hdWrap}>
        <Link to="/" className={styles.logoBox}>
          <FilBondLogo className={styles.logo} />
          <span className={styles.logoText}>FilBond</span>
        </Link>
        <nav>
          <Link
            to="https://app.filbond.io/"
            rel="noopener noreferrer">
            For Holder
          </Link>

          <Link
            to="https://app.filbond.io/nodes"
            rel="noopener noreferrer">
            For Miners
          </Link>
        </nav>
        <Link
          className={styles.lauchApp}
          to="https://app.filbond.io/">
          Lauch App
        </Link>
      </div>
    </header>
  )
}

export default Header
