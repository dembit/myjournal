import React, { FormEvent } from 'react'
import styles from './ModalLoginForms.module.css'
import Modal from '../../UIKit/Modal/Modal'
import InputCustom from '../../UIKit/InputCustom/InputCustom'
import ButtonCustom from '../../UIKit/ButtonCustom/ButtonCustom'
import { PromiseDelay } from '../../helpers/fetcher'
import { AuthKeyLSEnum } from '../../helpers/reactTools'
import { observer } from 'mobx-react'
import store, { getInitListNotes } from '../../store'
interface Props {
  isOpen: boolean
  cancelCallback: () => void
}

const ModalLoginForm = ({ isOpen, cancelCallback }: Props) => {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const result = await PromiseDelay(formData)
      result.forEach((value, key) => {
        localStorage.setItem(key, value.toString())
      })
      store.setIsAuth(true)
      store.overWriteListNote(getInitListNotes())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} cancelCallback={cancelCallback}>
        <form className={styles.modalLoginForm} onSubmit={handleSubmit}>
          <label>
            <h3>Введите Email:</h3>
            <InputCustom required type="email" name={AuthKeyLSEnum.EMAIL} />
          </label>
          <label>
            <h3>Введите имя</h3>
            <InputCustom required type="text" name={AuthKeyLSEnum.NAME} />
          </label>
          <ButtonCustom types="blue">Log In</ButtonCustom>
        </form>
      </Modal>
    </>
  )
}

export default observer(ModalLoginForm)
