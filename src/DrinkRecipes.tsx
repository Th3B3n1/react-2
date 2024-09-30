import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { Recipe } from './Recipe';
import { Footer } from './Footer';

function DrinkRecipes() 
{
  const [numbers] = useState([0, 2, 4, 6, 8])
  const [titles] = useState([
    "Kettő személyre:",
    "Egy összejövetelre:"
  ])
  const [name] = useState("Gipsz Jakab");
  const [date] = useState("2024.09.30.");
  const [time] = useState("15");
  const [aiUsed] = useState([
    "erre használtam",
    "arra használtam",
    "pontosan megfogalmazva..."
  ])
  const [colors] = useState({
    black: {
      "background-color": "black",
      "color": "white"
    },
    white: {
      "background-color": "black",
      "color": "white"
    }
  })
  
  return (
    <div style={colors.black}>
      <Header />
      <h1>----Alap----</h1>
      {numbers.slice(0, 2).map(((number, index) => 
      (
        <Recipe key={index} title={titles[index]} ingridients={[
          `Forraljon fel ${number + 2} csésze vizet.`,
          `Adjunk hozzá ${number + 2} kanál (tetszőleges) teát és ${number + 1} kanál fűszert.`,
          `Adjunk hozzá ${number + 1} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.`
        ]} />
      )))}
      <h1>----5db----</h1>
      {numbers.map(((number, index) => 
      (
        <Recipe key={index} title={(index + 1) + " személyre"} ingridients={[
          `Forraljon fel ${number + 2} csésze vizet.`,
          `Adjunk hozzá ${number + 2} kanál (tetszőleges) teát és ${number + 1} kanál fűszert.`,
          `Adjunk hozzá ${number + 1} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.`
        ]} />
      )))}
      <Footer name={name} date={date} time={time} aiUsed={aiUsed} />
      
    </div>

  )
}

export default DrinkRecipes
