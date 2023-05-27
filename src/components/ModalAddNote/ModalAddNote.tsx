import React, { FormEvent, useEffect, useState } from 'react'
import styles from './ModalAddNote.module.css'
import Modal from '../../UIKit/Modal/Modal'
import InputCustom from '../../UIKit/InputCustom/InputCustom'
import TextareaCustom from '../../UIKit/TextareaCustom/TextareaCustom'
import ButtonCustom from '../../UIKit/ButtonCustom/ButtonCustom'

interface Props {
  successCallback: (title: string, description: string) => void
  cancelCallBack: () => void
  isOpen?: boolean
  title?: string | undefined
  description?: string | undefined
  buttonText: string
}

const ModalAddNote = ({
  successCallback,
  isOpen = true,
  cancelCallBack,
  description = '',
  title = '',
  buttonText,
}: Props) => {
  const [titleValue, setTitleValue] = useState(title)
  const [descriptionValue, setDescriptionValue] = useState(description)

  useEffect(() => {
    setTitleValue(title)
  }, [title])
  useEffect(() => {
    setDescriptionValue(description)
  }, [description])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    successCallback(titleValue, descriptionValue)
  }

  console.log('render ModalAddUpdate')

  return (
    <>
      <Modal isOpen={isOpen} cancelCallback={cancelCallBack}>
        <form className={styles.modalAddNote} onSubmit={handleSubmit}>
          <label>
            <h3>Заголовок max длина 35.</h3>
            <InputCustom
              onChange={e => setTitleValue(e.target.value)}
              value={titleValue}
              maxLength={35}
              required
              type="text"
              name="title"
            />
          </label>
          <label>
            <h3>Описание</h3>
            <TextareaCustom
              value={descriptionValue}
              onChange={e => setDescriptionValue(e.target.value)}
              rows={4}
              required
              name="description"
            />
          </label>
          <ButtonCustom types="green">{buttonText}</ButtonCustom>
          <ButtonCustom onClick={cancelCallBack} types="blue">
            Cancel
          </ButtonCustom>
        </form>
      </Modal>
    </>
  )
}

export default ModalAddNote
