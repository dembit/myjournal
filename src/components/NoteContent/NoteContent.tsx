import React from 'react'
import styles from './NoteContent.module.css'
import { noteType } from '../../store'
import { DDMMYYYYFormat } from '../../helpers/reactTools'

type Props = {
  note: noteType
}

const NoteContent = ({
  note: { title, description, created_date, updated_date },
}: Props) => {
  return (
    <div className={styles.noteContent}>
      <h1>{title}</h1>
      <div>{description}</div>
      <div className={styles.noteContent_date}>
        <span>Create Date: {DDMMYYYYFormat(created_date)}</span>
        {updated_date && (
          <span>Update Date: {DDMMYYYYFormat(updated_date)}</span>
        )}
      </div>
    </div>
  )
}

export default NoteContent
