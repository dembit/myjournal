import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import styles from './App.module.css'
import { withCheckAuth } from './HOC/WithCheckAuth'
import NoteContent from './components/NoteContent/NoteContent'
import { observer } from 'mobx-react'
import LogInOut from './UIKit/LogInOut.tsx/LogInOut'
import store from './store'
import { getEmail, getName } from './helpers/reactTools'

const App = () => {
  return (
    <div className={[styles.app_context, 'container'].join(' ')}>
      <div className={styles.app_context__auth}>
        <LogInOut
          isLogin={false}
          text="Log Out"
          callback={() => store.setIsAuth(false)}
        />
      </div>
      <Sidebar />
      <div className={styles.wrapContent}>
        {!store.currentNote && (
          <h3>
            Приветсвую {getName()} {getEmail()}.
            <div>Пора планировать задачи и развиваться!</div>
          </h3>
        )}
        {store.currentNote && <NoteContent note={store.currentNote} />}
      </div>
    </div>
  )
}

export default withCheckAuth(observer(App))
