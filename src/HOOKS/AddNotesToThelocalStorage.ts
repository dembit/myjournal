import { useEffect } from 'react'
import { setNotesToThelocalStorage } from '../helpers/reactTools'
import { autorun } from 'mobx'
import store from '../store'

export const AddNotesToThelocalStorage = () => {
  useEffect(() => {
    autorun(() => setNotesToThelocalStorage(store.listNote))
  }, [])

  return {}
}
