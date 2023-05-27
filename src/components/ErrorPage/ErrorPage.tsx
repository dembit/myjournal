import React from 'react'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h2>Что то пошло не так на странице. </h2>
      <h3>Попробуйте обновить страницу.</h3>
    </div>
  )
}

export default ErrorPage
