const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

const inputPath = path.join(__dirname, "facilities.xlsx");
const outputPath = path.join(__dirname, "src", "data", "facilities.js");

// Read Excel
const workbook = xlsx.readFile(inputPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

// Transform
const results = data.map(row => ({
  name: row.Name?.toString().trim(),
  type: row.Type,
  city: row.City,
  country: row.Country,
  lat: typeof row.Latitude === "string" ? parseFloat(row.Latitude.replace(",", ".")) : row.Latitude,
  lon: typeof row.Longitude === "string" ? parseFloat(row.Longitude.replace(",", ".")) : row.Longitude,
  capacity: row.Capacity,
  commodity: row.Commodity
}));

// Export JS
const content = "export const facilities = " + JSON.stringify(results, null, 2) + ";";
fs.writeFileSync(outputPath, content, "utf8");

console.log("✅ facilities.js updated with", results.length, "entries.");
