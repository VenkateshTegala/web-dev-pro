//var generateName = require("sillyname");

//we can replace require() with import because of changing type="module" in package.json
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

console.log("--");

import superheroes from "superheroes";
const name = superheroes.random();
console.log(`Super hero name is : ${name}`);
