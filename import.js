const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const results = [];

fs.createReadStream(path.join(__dirname, "facilities.csv"), { encoding: "utf-8" })
  .pipe(csv({ separator: ";", skipLines: 0 }))
  .on("data", (data) => {
    // Convert numeric values
    data.lat = parseFloat(data.Latitude);
    data.lon = parseFloat(data.Longitude);

    // Remove extra fields, keep only the desired ones
    results.push({
      name: data.Name,
      type: data.Type,
      city: data.City,
      country: data.Country,
      lat: data.lat,
      lon: data.lon,
      capacity: data.Capacity,
      commodity: data["Commodity"]
    });
  })
  .on("end", () => {
    const outputPath = path.join(__dirname, "src", "data", "facilities.js");
    const content =
      "export const facilities = " + JSON.stringify(results, null, 2) + ";";

    fs.writeFileSync(outputPath, content, "utf8");
    console.log("✅ facilities.js updated with", results.length, "entries.");
  });
