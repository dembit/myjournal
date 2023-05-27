import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { noteType } from '../store'

export enum AuthKeyLSEnum {
  EMAIL = 'email',
  NAME = 'name',
}

export const getEmail = () => localStorage.getItem(AuthKeyLSEnum.EMAIL)
export const getName = () => localStorage.getItem(AuthKeyLSEnum.NAME)

//разлогинить пользователя
export const resetLocalStorageAuth = () => {
  localStorage.removeItem(AuthKeyLSEnum.EMAIL)
  localStorage.removeItem(AuthKeyLSEnum.NAME)
}

interface NoteslocalStorageType {
  notes: noteType[]
  name: string
  email: string
}
// получение всех записей из LocalStorage типа NoteslocalStorageType
export const getNotesInLocalStorage = () => {
  const notes = localStorage.getItem('notes')
  return notes ? (JSON.parse(notes) as NoteslocalStorageType[]) : []
}

// проверяет есть ли записи у конкретного пользователя (email, name из localstorage)
// если есть то возвращает массив этих записей
export const getNotesByEmailName = () => {
  const localNotes = getNotesInLocalStorage()
  const current = localNotes.find(
    ({ name, email }) => name === getName() && email === getEmail()
  )
  return current ? current.notes : null
}

// получает все записи из localstorage
// если запись уже есть, то добавляет уже в существующиe
// если записeй нет, то добавляет новую
// установка записей в localstorage
export const setNotesToThelocalStorage = (notes: noteType[]) => {
  const allNotes = getNotesInLocalStorage()
  const res = allNotes?.map(user => {
    const { email, name } = user
    if (email === getEmail() && name === getName()) {
      return { email, name, notes }
    }
    return user
  })

  console.log(getNotesByEmailName(), 'asd')
  localStorage.setItem(
    'notes',
    JSON.stringify(
      getNotesByEmailName()
        ? res
        : [...res, { notes, email: getEmail(), name: getName() }]
    )
  )
}
//добавление компоненты в body используя портал React
export const insertComponentToTheBody = (component: ReactNode) =>
  createPortal(component, document.body)

// Проверка авторизован пользователь или нет
// Проверка происходит из LocalStorage
export const checkIsAuth = () => {
  return !!getEmail() && !!getName()
}

export const DDMMYYYYFormat = (date: number | null) =>
  date ? new Date(date).toLocaleDateString('en-GB') : null

// Checks if the item contains the search term (case-insensitive).
export const isMatch = (item: string, searchTerm: string) =>
  item.toLowerCase().includes(searchTerm.toLowerCase())
