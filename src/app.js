/* eslint-disable */
import "bootstrap";
import "./style.css";

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const symbols = ["❤️", "💎", "☘️", "♠"];

const generateSymbol = symbols => {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
};

const getRandomSymbol = () => {
  const symbol = generateSymbol(symbols);
  document.getElementById("Ramdomsymbol").innerHTML = symbol;
};

getRandomSymbol();

const generateValue = values => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};
const getRandomValue = () => {
  const value = generateValue(values);
  document.getElementById("Ramdomvalue").innerHTML = value;
};
getRandomValue();
