/* eslint-disable */
import "bootstrap";
import "./style.css";

const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "🤴🏼", "👸🏼", "J"];
const symbols = ["❤️", "♦️", "♠︎", "♣️"];

const generateSymbol = symbols => {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const getRandomSymbol = () => {
  const excuse = generateSymbol(symbols);
  document.getElementById("Ramdomsymbol").innerHTML = excuse;
};

getRandomSymbol();
