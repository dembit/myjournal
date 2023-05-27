import React from 'react'
import InputCustom from '../../../UIKit/InputCustom/InputCustom'
import { observer } from 'mobx-react'
import store from '../../../store'

const SearchNotes = () => {
  return (
    <label>
      Фильтр по полям (title, description).
      <InputCustom
        type="text"
        placeholder="Search"
        onChange={e => store.setFilterValue(e.target.value)}
        style={{ fontSize: 22, width: '100%' }}
      />
    </label>
  )
}

export default observer(SearchNotes)
