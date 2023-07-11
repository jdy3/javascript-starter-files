import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement("button");

const content = document.createTextNode("Show Population");

button.appendChild(content);

button.onClick = displayPopulation;

document.body.appendChild(button);

createListOfFruits(fruits);
