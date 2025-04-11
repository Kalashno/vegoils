const fs = require('fs');
const path = require('path');
const { facilities } = require('./src/data/facilities');

const csvHeaders = "name,company,type,city,country,lat,lon,capacity,rawMaterial";
const csvRows = facilities.map((f) =>
  [
    f.name,
    f.type,
    f.city,
    f.country,
    f.lat,
    f.lon,
    f.capacity,
    f.commodity
  ]
    .map((val) => `"${(val ?? '').toString().replace(/"/g, '""')}"`) // CSV safe
    .join(',')
);

const csvContent = [csvHeaders, ...csvRows].join('\n');

fs.writeFileSync(path.join(__dirname, 'facilities.csv'), csvContent);
console.log("✅ CSV exported as facilities.csv");
