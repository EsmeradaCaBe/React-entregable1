import { useState } from "react";
import './App.css';
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors = ["#b185db","#fb6f92","#586ba4","#8fb996","#ff8c61","#ea69bb"];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

function App() {
  const [quote, setQuote] = useState(getRandom(db));
  
  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  }
  
  console.log(getRandom(db));
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} 
      />  
    </div>
  );
}

export default App;
