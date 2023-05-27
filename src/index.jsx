import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import style from "./style.css"
import ErrorPage from './components/ErrorPage/ErrorPage'
import {ErrorBoundary} from './UIKit/ErrorBoundary'
 



const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ErrorBoundary fallback={<ErrorPage/>
}><App /></ErrorBoundary>)
