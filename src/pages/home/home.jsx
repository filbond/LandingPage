import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { ReactComponent as MinDepositIcon } from '../../static/images/minDeposit-icon.svg'
import { ReactComponent as EarningsIcon } from '../../static/images/earnings-icon.svg'
import { ReactComponent as KycIcon } from '../../static/images/kyc-icon.svg'
import { ReactComponent as SafetyIcon } from '../../static/images/safety-icon.svg'
import { ReactComponent as CreditCheckIcon } from '../../static/images/creditCheck-icon.svg'
import { ReactComponent as RepayIcon } from '../../static/images/repay-icon.svg'
import { ReactComponent as LeaveAnytimeIcon } from '../../static/images/leaveAnytime-icon.svg'
import { ReactComponent as ManageNodeIcon } from '../../static/images/manageNode-icon.svg'
import { ReactComponent as MinersRateIcon } from '../../static/images/minersRate-icon.svg'

import styles from './home.module.scss'

const Slogan = () => {
  return (
    <section className={classNames(styles.moduleWrap, styles.sloganWrap)}>
      <h1>Where Filecoin Miners and Holders together make more money</h1>
      <div className={styles.links}>
        <Link
          className={styles.holders}
          to="https://app.filbond.io"
          rel="noopener noreferrer">
          For Holders
        </Link>

        <Link
          className={styles.miners}
          to="https://app.filbond.io/nodes"
          rel="noopener noreferrer">
          For Miners
        </Link>
      </div>
    </section>
  )
}

const ForHolder = () => {
  return (
    <section className={classNames(styles.moduleWrap, styles.forHolderWrap)}>
      <header>
        <h3>For Holders</h3>
        <h2>
          Don't let your Filecoins sit in your wallet. Put them to work, without
          loosing liquidity.
        </h2>
      </header>
      {/*  */}
      <div className={classNames(styles.moduleSc, styles.depositFiL)}>
        <div className={styles.picBox}>
          <img
            src={require('../../static/images/depositFiL.png')}
            srcSet={`${require('../../static/images/depositFiL.png')} 1x, ${require('../../static/images/depositFiL@2x.png')} 2x, ${require('../../static/images/depositFiL@3x.png')} 3x`}
            alt="Deposit FIL"
          />
        </div>
        <ul className={styles.list}>
          <li>
            <span className={styles.num}>1.</span>
            <span className={styles.txt}>Deposit FIL</span>
          </li>
          <li>
            <span className={styles.num}>2.</span>
            <span className={styles.txt}>Earn interest on deposit</span>
          </li>
          <li>
            <span className={styles.num}>3.</span>
            <span className={styles.txt}>
              Get stFIL to use however you wish
            </span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className={classNames(styles.moduleSc, styles.stFiLMagic)}>
        <div className={styles.magicConentBox}>
          <h3>The FilBond Magic</h3>
          <div className={styles.magicConent}>
            <p>
              When you deposit FIL, an equal amount of filBOND is minted. You
              can:
            </p>
            <ul>
              <li>1. Leave them in your wallet and maintain liquidity</li>
              <li>2. Provide liquidity to Decentralised Exchanges.</li>
              <li>3. Swap them with any other cryptocurrency</li>
            </ul>
            <p>
              Remember, when withdrawing FIL deposit, an equal amount of filBOND
              must be destroyed.
            </p>
          </div>
        </div>
        <img
          src={require('../../static/images/swap.png')}
          srcSet={`${require('../../static/images/swap.png')} 1x, ${require('../../static/images/swap@2x.png')} 2x, ${require('../../static/images/swap@3x.png')} 3x`}
          alt="FilBond Magic"
        />
      </div>
      {/*  */}
      <div
        className={classNames(
          styles.moduleSc,
          styles.cmDesc,
          styles.descHolders
        )}
      >
        <div className={classNames(styles.descList)}>
          <div className={classNames(styles.descItem)}>
            <MinDepositIcon />
            <span className={styles.descTxt}>No minimum deposit required</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <EarningsIcon />
            <span className={styles.descTxt}>Cash out at any time</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <KycIcon />
            <span className={styles.descTxt}>No KYC need</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <SafetyIcon />
            <span className={styles.descTxt}>
              Smart-contracts guarantee minimal risk
            </span>
          </div>
        </div>
        <Link
          className={styles.descBtn}
          to="https://app.filbond.io"
          target="_blank"
          rel="noopener noreferrer">
          Start earning more
        </Link>
      </div>
    </section>
  )
}

const ForMiners = () => {
  return (
    <section className={classNames(styles.moduleWrap, styles.forMinersWrap)}>
      <header>
        <h3>For Miners</h3>
        <h2>
          Register your node and unlock capital for your mining operation.
        </h2>
      </header>
      {/*  */}
      <div className={classNames(styles.moduleSc, styles.manageNode)}>
        <div className={styles.picBox}>
          <img
            src={require('../../static/images/manageNode.png')}
            srcSet={`${require('../../static/images/manageNode.png')} 1x, ${require('../../static/images/manageNode@2x.png')} 2x, ${require('../../static/images/depositFiL@3x.png')} 3x`}
            alt="Manage Node"
          />
        </div>
        <ul className={styles.list}>
          <li>
            <span className={styles.num}>1.</span>
            <span className={styles.txt}>Register Node</span>
          </li>
          <li>
            <span className={styles.num}>2.</span>
            <span className={styles.txt}>Choose loan size</span>
          </li>
          <li>
            <span className={styles.num}>3.</span>
            <span className={styles.txt}>Receive funds</span>
          </li>
          <li>
            <span className={styles.num}>4.</span>
            <span className={styles.txt}>Add loan to your Filecoin pledge</span>
          </li>
          <li>
            <span className={styles.num}>5.</span>
            <span className={styles.txt}>Enjoy higher rewards</span>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className={classNames(styles.moduleSc, styles.feature)}>
        <dl>
          <dt>
            <LeaveAnytimeIcon />
            <span className={styles.hd}>Leave anytime</span>
          </dt>
          <dd>
            You can unregister your node at any time, as long as you don't have
            any active debt.
          </dd>
        </dl>
        <dl>
          <dt>
            <ManageNodeIcon />
            <span className={styles.hd}>Manage your node as usual</span>
          </dt>
          <dd>
            Use Lotus as your accustomed, Atomax will only regulate withdrawals
            when you have unpaid debts.{' '}
          </dd>
        </dl>
        <dl>
          <dt>
            <MinersRateIcon />
            <span className={styles.hd}>
              The higher the mining difficulty, the lower the interest rate
            </span>
          </dt>
          <dd>
            Interest rate is constantly adjusted depending on the mining
            difficulty, this way we keep miners better protected.
          </dd>
        </dl>
      </div>
      {/*  */}
      <div
        className={classNames(
          styles.moduleSc,
          styles.cmDesc,
          styles.descMiners
        )}
      >
        <div className={classNames(styles.descList)}>
          <div className={classNames(styles.descItem)}>
            <CreditCheckIcon />
            <span className={styles.descTxt}>No credit check required</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <EarningsIcon />
            <span className={styles.descTxt}>Access capital quickly</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <KycIcon />
            <span className={styles.descTxt}>No KYC need</span>
          </div>
          <div className={classNames(styles.descItem)}>
            <RepayIcon />
            <span className={styles.descTxt}>
              Repay at anytime, no pressure
            </span>
          </div>
        </div>
        <Link
          className={styles.descBtn}
          to="https://app.filbond.io/nodes"
          target="_blank"
          rel="noopener noreferrer">
          Increase pledge
        </Link>
      </div>
      {/*  */}
    </section>
  )
}

const Vote = () => {
  return (
    <section className={classNames(styles.moduleWrap, styles.voteWrap)}>
      <div className={classNames(styles.vote)}>
        <div className={styles.picBox}>
          <img
            src={require('../../static/images/vote.png')}
            srcSet={`${require('../../static/images/vote.png')} 1x, ${require('../../static/images/vote@2x.png')} 2x, ${require('../../static/images/vote@3x.png')} 3x`}
            alt="Vote"
          />
        </div>
        <div className={styles.infoBox}>
          <h2>Decentralized democracy</h2>
          <div className={styles.infoDd}>
            <p>
              Atomax is a community project where users are able to vote on the
              development decisions of the platform
            </p>
            <p>
              This Decentralised Autonomous Organisation (DAO) structure puts
              the governance firmly in the hands of the user
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="page">
      <Header />
      <main className={classNames('layout', styles.home)}>
        <Slogan />
        <ForHolder />
        <ForMiners />
        <Vote />
      </main>
      <Footer />
    </div>
  )
}

export default Home
