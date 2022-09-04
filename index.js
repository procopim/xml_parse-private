// #### sync way with callback ####
const { XMLParser } = require("fast-xml-parser");
const fs = require("fs");

const parser = new XMLParser();
const data = fs.readFile("./jobstrategies.xml", function (err, data) {
  const jObj = parser.parse(data);

  const strategies = [];
  jObj.ServiceInfo.Turbine.JobCoordinator.JobStrategyLogs.JobStrategyLog.forEach(
      (log) => {
        let row = log.FactoryName.toString();
        strategies.push(row);
      }
    );
  const writer = fs.createWriteStream("./prod.csv")
  strategies.forEach((item) => {
    writer.write(item+"\n", (err)=>{if (err) throw err;});
  })
});

// #### async way with promises ####
// const { XMLParser } = require("fast-xml-parser");
// const fs = require("fs").promises;

// const parser = new XMLParser();

// const readFile = async (filePath) => {
//   try {
//     const data = await fs.readFile(filePath, "utf8");
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const data = readFile("./jobstrategies.xml")
//   .then((data) => {
//     const jObj = parser.parse(data);

//     const strategies =
//       jObj.ServiceInfo.Turbine.JobCoordinator.JobStrategyLogs.JobStrategyLog.forEach(
//         (log) => {
//           console.log(log);
//         }
//       );
//   })
//   .catch((err) => console.log(error));

// ### Sync way ###
// const { XMLParser } = require("fast-xml-parser");
// const fs = require("fs");

// const parser = new XMLParser();
// const xmlData = fs.readFileSync("./jobstrategies.xml");

// const jObj = parser.parse(xmlData);

// const strategies =
//   jObj.ServiceInfo.Turbine.JobCoordinator.JobStrategyLogs.JobStrategyLog.forEach(
//     (log) => {
//       console.log(log);
//     }
//   );
