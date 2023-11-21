import quotes from "./db/quoates.json";
import './App.css'
import { getRandomElement } from "./utils/random";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";

const bgs = ["bg1", "bg2", "bg3", "bg4"];
function App() {
 const [quote, setQuote] = useState(getRandomElement(quotes))
 const [currentBg, setcurrentBg] = useState(getRandomElement(bgs));
const handleChangeQuote = ()=> {
  setQuote(getRandomElement(quotes));
  setcurrentBg(getRandomElement(bgs))
}

  return (
    <main className={`App ${currentBg}`}>

  <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
