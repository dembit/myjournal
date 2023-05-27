import React, { useState } from 'react'
import styles from './Greeting.module.css'
import LogInOut from '../../UIKit/LogInOut.tsx/LogInOut'

import ModalLoginForm from '../ModalLogInForm/ModalLoginForm'

const Greeting = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className={styles.greeting}>
      <h1>Мой личный дневник</h1>
      <div className={styles.greeting_wrapLogIn}>
        <LogInOut callback={() => setIsOpen(!isOpen)} isLogin text={'Log In'} />
        <ModalLoginForm cancelCallback={closeModal} isOpen={isOpen} />
      </div>
    </div>
  )
}

export default Greeting
