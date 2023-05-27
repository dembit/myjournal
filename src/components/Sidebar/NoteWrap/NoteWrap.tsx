import React, { useState } from 'react'
import NoteItem from '../../../UIKit/NoteItem/NoteItem'
import store, { noteType } from '../../../store'
import ModalAddNote from '../../ModalAddNote/ModalAddNote'
import { observer } from 'mobx-react'

type Props = {
  note: noteType
}

const NoteWrap = ({ note }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen && (
        <ModalAddNote
          buttonText="Редактировать запись"
          successCallback={(title, description) => {
            setIsOpen(false)
            store.updateListNote(note, { title, description })
            store.addCurrentNote(note)
          }}
          isOpen={isOpen}
          cancelCallBack={() => setIsOpen(false)}
          description={note.description}
          title={note.title}
        />
      )}
      <NoteItem
        title={note.title}
        add={() => store.addCurrentNote(note)}
        remove={() => store.removeNote(note)}
        update={() => {
          setIsOpen(true)
        }}
      />
    </>
  )
}

export default observer(NoteWrap)
