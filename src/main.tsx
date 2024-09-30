import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrinkRecipes from './DrinkRecipes.tsx'
import { Switch } from './Switch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrinkRecipes />
    <Switch />
  </StrictMode>,
)
