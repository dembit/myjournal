import { makeAutoObservable, runInAction } from 'mobx'
import {
  checkIsAuth,
  getNotesByEmailName,
  resetLocalStorageAuth,
} from './helpers/reactTools'
import { PromiseDelay } from './helpers/fetcher'

const initNote = {
  id: 0,
  title: 'Title Example',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  created_date: 1685204608989 as null | number,
  updated_date: null as null | number,
}

export type noteType = typeof initNote
// получаем все записи из localstorage конкретного пользователя
// если записей нет то добавляем по дефолту
export const getInitListNotes = () => {
  const notes = getNotesByEmailName()
  return notes ? notes : [initNote]
}

class Store {
  isAuth: boolean
  listNote: noteType[]
  currentNote: noteType | false
  filterValue = ''
  constructor(isAuth: boolean, listNote: noteType[]) {
    this.isAuth = isAuth
    this.listNote = listNote
    this.currentNote = false

    makeAutoObservable(this)
  }
  async createNote(value: string, descr: string) {
    try {
      const { description, title } = await PromiseDelay({
        title: value,
        description: descr,
      })
      runInAction(() => {
        this.listNote = [
          ...this.listNote,
          {
            id: this.listNote.length,
            title,
            description,
            created_date: Date.now(),
            updated_date: null,
          },
        ]
      })
    } catch (error) {
      console.log(error)
    }
  }

  setFilterValue(value: string) {
    this.filterValue = value
  }

  removeNote(node: noteType) {
    this.listNote = this.listNote.filter(item => item !== node)
    this.currentNote = false
  }

  addCurrentNote(note: noteType) {
    const { title, description } = note
    this.currentNote = { ...note, description, title }
  }

  updateListNote(
    note: noteType,
    fields: { title: string; description: string }
  ) {
    note.title = fields.title
    note.description = fields.description
    note.updated_date = Date.now()
  }
  overWriteListNote(notes: noteType[]) {
    this.listNote = notes
  }
  setIsAuth(data: boolean) {
    if (!data) {
      resetLocalStorageAuth()
      this.currentNote = false
    }
    this.isAuth = data
  }
}

const store = new Store(checkIsAuth(), getInitListNotes())
export default store
