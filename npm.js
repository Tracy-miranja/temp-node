//npm-global comand, comes with node
//ceck version npm --version
//local dependancy- use it only in particular project
// npm i <packagename>
//global dependancy - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json intall - manifest file(stores important information about project or package);
//to install run npm init or npm init -y

const _= require('lodash');

const items= [[1], [2,3,[4]]];
const newItems= _.flattenDeep(items)
console.log(newItems)