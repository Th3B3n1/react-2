import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrinkRecipes from './DrinkRecipes.tsx'
import { Switch } from './Switch.tsx'
import { ColorChanger } from './ColorChanger.tsx'
import { TextFunctions } from './TextFunctions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrinkRecipes />
    <hr />
    <Switch />
    <hr />
    <ColorChanger />
    <hr />
    <TextFunctions />
  </StrictMode>,
)
