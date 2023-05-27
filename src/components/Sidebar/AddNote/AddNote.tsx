import React, { useState } from 'react'
import styles from './AddNote.module.css'
import ButtonCustom from '../../../UIKit/ButtonCustom/ButtonCustom'
import { observer } from 'mobx-react'
import store from '../../../store'
import ModalAddNote from '../../ModalAddNote/ModalAddNote'

const AddNote = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className={styles.headerSidebar}>
      <ButtonCustom
        types="green"
        onClick={() => setIsOpen(true)}
        style={{ width: '100%', marginBottom: 10 }}
      >
        Добавить заметку
      </ButtonCustom>
      {isOpen && (
        <ModalAddNote
          buttonText="Create New Note"
          cancelCallBack={closeModal}
          successCallback={(title, descr) => {
            store.createNote(title, descr)
            closeModal()
          }}
        />
      )}
    </div>
  )
}

export default observer(AddNote)
