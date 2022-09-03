const { XMLParser } = require("fast-xml-parser");
const fs = require("fs");

const xmlData = fs.readFileSync("./jobstrategies.xml");

const parser = new XMLParser();
let jObj = parser.parse(xmlData);

console.log("gg"); // set a breakpoint here then read the value of jObj
