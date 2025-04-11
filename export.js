const fs = require("fs");
const path = require("path");
const { facilities } = require("./src/data/facilities");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvPath = path.join(__dirname, "facilities.csv");

// UTF-8 BOM for Excel
fs.writeFileSync(csvPath, '\uFEFF');

const csvWriter = createCsvWriter({
  path: csvPath,
  header: [
    { id: "name", title: "Name" },
    { id: "type", title: "Asset" },
    { id: "city", title: "City" },
    { id: "country", title: "Country" },
    { id: "lat", title: "Latitude" },
    { id: "lon", title: "Longitude" },
    { id: "capacity", title: "Capacity" },
    { id: "commodity", title: "Commodity" }
  ],
  fieldDelimiter: ";",
  alwaysQuote: true,
  recordDelimiter: "\r\n"
});

csvWriter
  .writeRecords(facilities)
  .then(() => {
    console.log("✅ facilities.csv exported in full Excel-friendly format.");
  })
  .catch((err) => {
    console.error("❌ Export failed:", err);
  });
