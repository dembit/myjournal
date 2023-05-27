import React from 'react'
import styles from './NoteItem.module.css'
import deleteSvg from './img/delete.svg'
import updateSvg from './img/update.svg'

type Props = {
  title: string
  add: () => void
  remove: () => void
  update: () => void
}

const NoteItem = ({ title, add, remove, update }: Props) => {
  return (
    <div className={styles.noteItem}>
      <div className={styles.nodeItem_img}>
        <img onClick={remove} src={deleteSvg} alt="delete" />
        <img onClick={update} src={updateSvg} alt="update" />
      </div>
      <button onClick={add}>{title}</button>
    </div>
  )
}

export default NoteItem
