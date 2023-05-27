import React, { InputHTMLAttributes } from 'react'
import styles from './InputCustom.module.css'

type Props = InputHTMLAttributes<HTMLInputElement>

const InputCustom = (props: Props) => {
  return <input className={styles.InputCustom} {...props} />
}

export default InputCustom
