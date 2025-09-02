import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { FirstSeptsApp } from './FirstSeptsApp'
import { MyAwesomeApp } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstSeptsApp /> */}
    <MyAwesomeApp />
  </StrictMode>,
)
