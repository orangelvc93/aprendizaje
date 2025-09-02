import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './bases/01_object_literal'
import './bases/10_fetch_API'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="p-4">Hello, world!</div>
  </StrictMode>,
)
