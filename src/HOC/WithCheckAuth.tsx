/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import Greeting from '../components/Greeting/Greeting'
import { autorun } from 'mobx'
import store from '../store'

export function withCheckAuth<P extends React.JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return (props: P) => {
    const [isOpen, setISOpen] = useState(false)
    useEffect(() => {
      autorun(() => setISOpen(store.isAuth))
    }, [])
    return isOpen ? <Component {...props} /> : <Greeting />
  }
}
