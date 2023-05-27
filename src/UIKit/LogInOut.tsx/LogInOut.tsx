import React from 'react'
import logInSvg from '../../img/login.svg'
import logOutSvg from '../../img/logout.svg'
import styles from './LogInOut.module.css'

type Props = {
  isLogin: boolean
  text: string
  callback?: () => void
}

const LogInOut = ({ isLogin, text, callback }: Props) => {
  return (
    <button className={styles.logInOut} onClick={callback}>
      <img src={isLogin ? logInSvg : logOutSvg} alt="" />
      <div className={styles.logInOut_title}>{text}</div>
    </button>
  )
}

export default LogInOut
