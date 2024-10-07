import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DrinkRecipes } from './components/DrinkRecipes'
import { Switch } from './components/Switch'
import { ColorChanger } from './components/ColorChanger'
import { TextFunctions } from './components/TextFunctions'

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
