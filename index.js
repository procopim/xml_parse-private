const { XMLParser } = require("fast-xml-parser");
const fs = require("fs");

const parser = new XMLParser();
const xmlData = fs.readFileSync("./jobstrategies.xml");

const jObj = parser.parse(xmlData);

const strategies =
  jObj.ServiceInfo.Turbine.JobCoordinator.JobStrategyLogs.JobStrategyLog.forEach(
    (log) => {
      console.log(log);
    }
  );
