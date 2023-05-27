import React from 'react'
import styles from './Sidebar.module.css'
import { observer } from 'mobx-react'
import store from '../../store'
import SearchNotes from './SearchNotes/SearchNotes'
import AddNote from './AddNote/AddNote'
import { AddNotesToThelocalStorage } from '../../HOOKS/AddNotesToThelocalStorage'
import NoteWrap from './NoteWrap/NoteWrap'
import { isMatch } from '../../helpers/reactTools'

const Sidebar = () => {
  AddNotesToThelocalStorage()
  return (
    <div className={styles.sidebar}>
      <SearchNotes />
      {store.listNote.length === 0 && <p>Список вceх заметок пуст!</p>}
      <div className={styles.sidebar_context}>
        {store.listNote
          .filter(item => {
            if (store.filterValue) {
              return (
                isMatch(item.title, store.filterValue) ||
                isMatch(item.description, store.filterValue)
              )
            }
            return true
          })
          .map(note => (
            <NoteWrap key={note.id} note={note} />
          ))}
      </div>
      <AddNote />
    </div>
  )
}

export default observer(Sidebar)
