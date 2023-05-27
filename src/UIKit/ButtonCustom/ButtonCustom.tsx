import React, { HtmlHTMLAttributes } from 'react'
import styles from './ButtonCustom.module.css'

const styleButton = {
  green: { background: 'green', color: 'var(--color-white)' },
  blue: { background: 'var(--color-border)', color: 'var(--color-white)' },
}

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  types: keyof typeof styleButton
  children: React.ReactNode
}

const ButtonCustom = ({ types, children, ...rest }: Props) => {
  return (
    <button
      className={styles.buttonCustom}
      {...rest}
      style={{ ...styleButton[types], ...rest.style }}
    >
      {children}
    </button>
  )
}

export default ButtonCustom
