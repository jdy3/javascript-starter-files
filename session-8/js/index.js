import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement("button");

const content = document.createTextNode("Show Population");

button.appendChild(content);

button.onClick = displayPopulation();

document.body.appendChild(button);

createListOfFruits(fruits);

const x = document.querySelector("#clickMe");
const y = document.querySelector("#hovering");

x.addEventListener("click", respondClick);
y.addEventListener("mouseover", respondMouseOver);
y.addEventListener("mouseout", respondMouseOut);

function respondMouseOver() {
  document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
}

function respondMouseOut() {
  document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
}

function respondClick() {
  document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
}
