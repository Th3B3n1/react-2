import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { Recipe } from './Recipe';
import { Footer } from './Footer';

export function DrinkRecipes() 
{
  const [number, setNumber] = useState(1);
  const [numbers] = useState([0, 2, 4, 6, 8]);
  const [titles] = useState([
    "Kettő személyre:",
    "Egy összejövetelre:"
  ]);
  const [colors] = useState(
    [
      {
        "backgroundColor": "black",
        "color": "white"
      },
      {
        "backgroundColor": "black",
        "color": "red"
      },
      {
        "backgroundColor": "white",
        "color": "black"
      }
    ]
  );
  function randomColor()
  {
    return colors[Math.floor(Math.random() * (colors.length - 0))]
  }
  
  return (
    <div style={randomColor()} id="main">
      <Header title={"Fűszeres Chai recept!"} />
      {numbers.slice(0, 2).map(((number, index) => 
      (
        <Recipe key={index} title={titles[index]} ingridients={[
          `Forraljon fel ${number + 2} csésze vizet.`,
          `Adjunk hozzá ${number + 2} kanál (tetszőleges) teát és ${number + 1} kanál fűszert.`,
          `Adjunk hozzá ${number + 1} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.`
        ]} />
      )))}
      <h1>5db</h1>
      {numbers.map(((number, index) => 
      (
        <Recipe key={index} title={(index + 1) + " személyre"} ingridients={[
          `Forraljon fel ${number + 2} csésze vizet.`,
          `Adjunk hozzá ${number + 2} kanál (tetszőleges) teát és ${number + 1} kanál fűszert.`,
          `Adjunk hozzá ${number + 1} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.`
        ]} />
      )))}
      <label htmlFor="numberSelect">Személyek száma: </label><select name="numberSelect" onChange={(e) => setNumber(Number(e.currentTarget.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <Recipe title={(number) + " személyre"} ingridients={[
        `Forraljon fel ${number + 1} csésze vizet.`,
        `Adjunk hozzá ${number + 1} kanál (tetszőleges) teát és ${number} kanál fűszert.`,
        `Adjunk hozzá ${number} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.`
      ]} />
      <Footer name={"Gipsz Jakab"} date={"2024-09-30"} time={"15"} aiUsed={[
        "erre használtam",
        "arra használtam",
        "pontosan megfogalmazva..."
      ]} />
    </div>
  )
}

export default DrinkRecipes
