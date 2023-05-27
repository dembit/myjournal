/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react'
import { insertComponentToTheBody } from '../../helpers/reactTools'
import styles from './Modal.module.css'

type Props = {
  children: React.ReactNode
  cancelCallback?: () => void
  isOpen: boolean
}

const Modal: FC<Props> = ({
  children,
  isOpen = true,
  cancelCallback = () => {},
}) => {
  //use portal react to append component to the body
  return insertComponentToTheBody(
    isOpen && (
      <div className={styles.modal}>
        <div onClick={cancelCallback} className={styles.modal_background}></div>
        <div className={styles.modal_context}>{children}</div>
      </div>
    )
  )
}

export default Modal
