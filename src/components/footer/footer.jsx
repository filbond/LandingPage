import React from 'react'
import { Link } from 'react-router-dom'
import { GoLinkExternal } from 'react-icons/go'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { TbBrandWechat } from 'react-icons/tb'
import { SiTelegram } from 'react-icons/si'
import { ReactComponent as FilBondLogo } from '../../static/images/logo.svg'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.ftWrap}>
      <div className={styles.r1}>
        <Link to="/" className={styles.logoBox}>
          <FilBondLogo className={styles.logo} />
          <span className={styles.logoText}>FilBond</span>
        </Link>
        <div className={styles.navLauchApp}>
          <nav>
            <span className={styles.goUrls}>
              <Link
                to="https://www.filda.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>FilDA.io</span>
                <GoLinkExternal />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <span>Docs</span>
                <GoLinkExternal />
              </Link>
            </span>
            <Link to="/" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </Link>
          </nav>
          <Link className={styles.lauchApp} to="/">
            Lauch App
          </Link>
        </div>
      </div>
      <div className={styles.r2}>
        <div className={styles.links}>
          <Link to="/" target="_blank" rel="noopener noreferer">
            <SiTelegram style={{ fontSize: 22 }} />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferer">
            <TbBrandWechat />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferer">
            <AiOutlineTwitter />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferer">
            <AiFillGithub />
          </Link>
        </div>
        <span className={styles.copyright}>
          Crafted with ❤️ by the FilDA Team 🌎
        </span>
      </div>
    </div>
  )
}

export default Footer
