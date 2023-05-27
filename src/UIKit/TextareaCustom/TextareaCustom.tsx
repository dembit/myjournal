import React, { TextareaHTMLAttributes } from 'react'
import styles from './TextareaCustom.module.css'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

const TextareaCustom = (props: Props) => {
  return <textarea className={styles.textareaCustom} {...props} />
}

export default TextareaCustom
