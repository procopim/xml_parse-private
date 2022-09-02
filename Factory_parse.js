
const XMLParser = require('fast-xml-parser');
const fs = require('fs');

const data = fs.readFile("./jobstrategies.xml", function (err,data) {
    if (err){
        console.log(err);
    }
})
const parser = new XMLParser.XMLParser();

const xmlDoc = parser.parse(data);

//console.log(xmlDoc);

/* let strategies = data.getElementsByTagName("Turbine");


for (let elem = 0; elem < strategies.length; elem++){
    console.log(elem);
    //console.log(strategies.indexOf(elem).toString());
}; */