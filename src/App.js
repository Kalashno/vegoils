import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const getIcon = (type) => {
  if (type.toLowerCase().includes("crushing")) {
    return L.icon({
      iconUrl: "/crushing.jpg",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  } else {
    return L.icon({
      iconUrl: "/refinery.jpg",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  }
};

const facilities = [
  {
    name: "HULL",
    company: "AAK",
    type: "Refinery",
    city: "HULL",
    country: "United Kingdom",
    lat: 53.7440,
    lon: -0.3350,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Karlshamn",
    company: "AAK",
    type: "Crushing Plant, Refinery",
    city: "Karlshamn",
    country: "Sweden",
    lat: 56.1670,
    lon: 14.8500,
    capacity: "N/A",
    rawMaterial: "RSO"
  },
  {
    name: "MaasRefinery",
    company: "AAK",
    type: "Refinery",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244,
    lon: 4.4777,
    capacity: "40000",
    rawMaterial: "N/A"
  },
  {
    name: "OURENSE",
    company: "ACEITES ABRIL S.L. (poligono industrial)",
    type: "Refinery",
    city: "OURENSE",
    country: "Spain",
    lat: 42.3420,
    lon: -7.8630,
    capacity: "280 MT/day",
    rawMaterial: "SFO, OLIVE"
  },
  {
    name: "Allseeds Yuzhny",
    company: "ALLSEEDS",
    type: "Crushing Plant",
    city: "Yuzhny",
    country: "Ukraine",
    lat: 46.6220,
    lon: 31.1010,
    capacity: "100000",
    rawMaterial: "N/A"
  },
  {
    name: "APICAL Jakarta",
    company: "APICAL",
    type: "Refinery",
    city: "Jakarta",
    country: "Indonesia",
    lat: -6.2080,
    lon: 106.8450,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "APICAL Kalimantan",
    company: "APICAL",
    type: "Refinery",
    city: "Kalimantan",
    country: "Indonesia",
    lat: 0.0000,
    lon: 114.0000,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "APICAL Nanjing",
    company: "APICAL",
    type: "Refinery",
    city: "Nanjing",
    country: "China",
    lat: 32.0603,
    lon: 118.7960,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "APICAL Padang",
    company: "APICAL",
    type: "Refinery",
    city: "Padang",
    country: "Indonesia",
    lat: -0.9490,
    lon: 100.3540,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Apical Sumatra (Crushing)",
    company: "APICAL",
    type: "Crushing Plant, Refinery",
    city: "Sumatra",
    country: "Indonesia",
    lat: 0.0000,
    lon: 102.0000,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Europoort Plant",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244,
    lon: 4.4777,
    capacity: "N/A",
    rawMaterial: "DSBO"
  },
  {
    name: "ARRAS",
    company: "ARCHER DANIELS MIDLAND",
    type: "Refinery",
    city: "ARRAS",
    country: "France",
    lat: 50.2890,
    lon: 2.7780,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "CHORNOMORSK",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant",
    city: "Chornomorsk",
    country: "Ukraine",
    lat: 46.3000,
    lon: 30.6540,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "CZERNIN",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Czernin",
    country: "Poland",
    lat: 54.2820,
    lon: 19.1730,
    capacity: "N/A",
    rawMaterial: "RSO"
  },
  {
    name: "ERITH",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Erith",
    country: "United Kingdom",
    lat: 51.4810,
    lon: 0.1750,
    capacity: "385000",
    rawMaterial: "RSO"
  },
  {
    name: "HAMBURG",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Hamburg",
    country: "Germany",
    lat: 53.5510,
    lon: 9.9930,
    capacity: "N/A",
    rawMaterial: "DSBO, RSO"
  },
  {
    name: "MAINZ",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant",
    city: "Mainz",
    country: "Germany",
    lat: 49.9920,
    lon: 8.2470,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "OLOMOUC",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Olomouc",
    country: "Czech Republic",
    lat: 49.5940,
    lon: 17.2500,
    capacity: "N/A",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "Quincy, IL",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Quincy, IL",
    country: "United States",
    lat: 39.9350,
    lon: -91.4090,
    capacity: "N/A",
    rawMaterial: "DSBO"
  },
  {
    name: "Spiritwood, ND",
    company: "ARCHER DANIELS MIDLAND",
    type: "Crushing Plant, Refinery",
    city: "Spiritwood, ND",
    country: "United States",
    lat: 47.0420,
    lon: -98.7160,
    capacity: "in construction",
    rawMaterial: "DSBO"
  },
  {
    name: "PALDISKI",
    company: "BALTIC OIL SERVICE",
    type: "Refinery",
    city: "Paldiski",
    country: "Estonia",
    lat: 59.3520,
    lon: 24.0530,
    capacity: "N/A",
    rawMaterial: "CPO"
  },
  {
    name: "HAMM",
    company: "BROEKELMANN & CO (oehmuehle GMBH & co)",
    type: "Crushing Plant",
    city: "Hamm",
    country: "Germany",
    lat: 51.6770,
    lon: 7.8150,
    capacity: "N/A",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "MYKOLAIV",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Mykolaiv",
    country: "Ukraine",
    lat: 46.9750,
    lon: 31.9940,
    capacity: "1000000",
    rawMaterial: "N/A"
  },
  {
    name: "Dnipro",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Dnipro",
    country: "Ukraine",
    lat: 48.4640,
    lon: 35.0460,
    capacity: "N/A",
    rawMaterial: "SFO"
  },
  {
    name: "ALTONA, MB",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Altona, MB",
    country: "Canada",
    lat: 49.1040,
    lon: -97.5600,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BELLEVUE, OH",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Bellevue, OH",
    country: "United States",
    lat: 41.2730,
    lon: -82.8420,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "CAIRO, IL",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Cairo, IL",
    country: "United States",
    lat: 37.0050,
    lon: -89.1760,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "COUNCIL BLUFFS, IA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Council Bluffs, IA",
    country: "United States",
    lat: 41.2610,
    lon: -95.8600,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DECATUR, AL",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Decatur, AL",
    country: "United States",
    lat: 34.6050,
    lon: -86.9830,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DELPHOS, OH",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Delphos, OH",
    country: "United States",
    lat: 40.8420,
    lon: -84.3390,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Destrehan, LA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Destrehan, LA",
    country: "United States",
    lat: 29.9580,
    lon: -90.3700,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DIXON, SK",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Dixon, SK",
    country: "Canada",
    lat: 53.3000,
    lon: -104.0000,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "EDMONTON",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Edmonton",
    country: "Canada",
    lat: 53.5460,
    lon: -113.4940,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "EMPORIA, KS",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Emporia, KS",
    country: "United States",
    lat: 38.4050,
    lon: -96.1810,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "FORT SASKATCHEWAN, AB",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Fort Saskatchewan, AB",
    country: "Canada",
    lat: 53.7120,
    lon: -113.2150,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "HAMILTON, ON",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Hamilton, ON",
    country: "Canada",
    lat: 43.2550,
    lon: -79.8710,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "HARROWBY, MB",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Harrowby, MB",
    country: "Canada",
    lat: 50.0220,
    lon: -100.2190,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "KEARNY, NJ",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Kearny, NJ",
    country: "United States",
    lat: 40.7530,
    lon: -74.1220,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "INDIANAPOLIS, IN",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Indianapolis, IN",
    country: "United States",
    lat: 39.7680,
    lon: -86.1580,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "MORRISTOWN, IN",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Morristown, IN",
    country: "United States",
    lat: 39.6730,
    lon: -85.6980,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "NIPAWIN, SK",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Nipawin, SK",
    country: "Canada",
    lat: 53.3550,
    lon: -104.0190,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "WAINWRIGHT, AB",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Wainwright, AB",
    country: "Canada",
    lat: 52.8370,
    lon: -110.8570,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "AMSTERDAM",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.3670,
    lon: 4.9040,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BILBAO",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Bilbao",
    country: "Spain",
    lat: 43.2630,
    lon: -2.9350,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "CARTAGENA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Cartagena",
    country: "Spain",
    lat: 37.6250,
    lon: -0.9960,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BARCELONA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Barcelona",
    country: "Spain",
    lat: 41.3870,
    lon: 2.1690,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "RAVENNA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Ravenna",
    country: "Italy",
    lat: 44.4180,
    lon: 12.2030,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "MANNHEIM",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Mannheim",
    country: "Germany",
    lat: 49.4880,
    lon: 8.4690,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "NEUSS",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Neuss",
    country: "Germany",
    lat: 51.1980,
    lon: 6.6850,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "KRUSZWICA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Kruszwica",
    country: "Poland",
    lat: 52.6780,
    lon: 18.3290,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BRZEG",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Brzeg",
    country: "Poland",
    lat: 50.8600,
    lon: 17.4670,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BRUCK",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Bruck",
    country: "Austria",
    lat: 47.4130,
    lon: 15.2790,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Tatabanya",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Tatabanya",
    country: "Hungary",
    lat: 47.5680,
    lon: 18.4140,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "MARTFU",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Martfu",
    country: "Hungary",
    lat: 46.8970,
    lon: 20.2890,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "VORONEZH",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Voronezh",
    country: "Russia",
    lat: 51.6610,
    lon: 39.2030,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BUZAU",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Buzau",
    country: "Romania",
    lat: 45.1500,
    lon: 26.8330,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "LEHLIU",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Lehliu",
    country: "Romania",
    lat: 44.4380,
    lon: 26.8460,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "THRACE",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Thrace",
    country: "Turkey",
    lat: 40.9780,
    lon: 27.9540,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "IZMIR",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Izmir",
    country: "Turkey",
    lat: 38.4230,
    lon: 27.1420,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "KANDLA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Kandla",
    country: "India",
    lat: 23.0100,
    lon: 70.2190,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "RAJPURA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Rajpura",
    country: "India",
    lat: 30.4830,
    lon: 76.5930,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Tiruchirappalli",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Tiruchirappalli",
    country: "India",
    lat: 10.7900,
    lon: 78.7040,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Pasir Gudang",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Pasir Gudang",
    country: "Malaysia",
    lat: 1.4600,
    lon: 103.8800,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "PHU MY",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Phu My",
    country: "Vietnam",
    lat: 10.6250,
    lon: 107.0250,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DONGGUAN",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Dongguan",
    country: "China",
    lat: 23.0200,
    lon: 113.7510,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "TIANJIN",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Tianjin",
    country: "China",
    lat: 39.3430,
    lon: 117.3610,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "RIZHAO",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Rizhao",
    country: "China",
    lat: 35.3890,
    lon: 119.5190,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "XIAMEN",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Xiamen",
    country: "China",
    lat: 24.4790,
    lon: 118.0890,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "TAIXING",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Taixing",
    country: "China",
    lat: 32.1710,
    lon: 120.0130,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "GASPAR",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Gaspar",
    country: "Brazil",
    lat: -26.9330,
    lon: -48.9530,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Jaguare",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Jaguaré",
    country: "Brazil",
    lat: -21.1370,
    lon: -48.1600,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "SUAPE",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Refinery",
    city: "Suape",
    country: "Brazil",
    lat: -8.3910,
    lon: -34.9450,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Uruçui",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Uruçui",
    country: "Brazil",
    lat: -7.2290,
    lon: -44.5620,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Luis Eduardo Magalhaes",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Luis Eduardo Magalhaes",
    country: "Brazil",
    lat: -12.0780,
    lon: -45.7860,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "LUZIANIA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Luziania",
    country: "Brazil",
    lat: -16.2530,
    lon: -47.9500,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "NOVA MUTUM",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Nova Mutum",
    country: "Brazil",
    lat: -13.8370,
    lon: -56.0740,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Rondonopolis",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Rondonopolis",
    country: "Brazil",
    lat: -16.4700,
    lon: -54.6350,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "PONTA GROSSA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Ponta Grossa",
    country: "Brazil",
    lat: -25.0940,
    lon: -50.1630,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Villeta",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Villeta",
    country: "Paraguay",
    lat: -25.5370,
    lon: -57.5320,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "RIO GRANDE",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Rio Grande",
    country: "Brazil",
    lat: -32.0340,
    lon: -52.1070,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "RAMALLO",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Ramallo",
    country: "Argentina",
    lat: -33.4840,
    lon: -60.0060,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "SAN JERONIMO SUD",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "San Jeronimo Sud",
    country: "Argentina",
    lat: -32.8310,
    lon: -61.0340,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Puerto San Martin",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant, Refinery",
    city: "Puerto San Martin",
    country: "Argentina",
    lat: -32.7340,
    lon: -60.7320,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "TANCACHA",
    company: "BUNGE LODERS CROCKLAAN",
    type: "Crushing Plant",
    city: "Tancacha",
    country: "Argentina",
    lat: -32.7740,
    lon: -63.9360,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "REGINA",
    company: "CARGILL",
    type: "Refinery",
    city: "Regina",
    country: "Canada",
    lat: 50.4450,
    lon: -104.6180,
    capacity: "in construction",  // ~1,000,000 MT/yr&#8203;:contentReference[oaicite:4]{index=4}
    rawMaterial: "CANOLA"
  },
  {
    name: "CAMROSE",
    company: "CARGILL",
    type: "Refinery",
    city: "Camrose",
    country: "Canada",
    lat: 53.0260,
    lon: -112.8290,
    capacity: "N/A",  // ~850,000 MT/yr
    rawMaterial: "CANOLA"
  },
  {
    name: "CLAVET",
    company: "CARGILL",
    type: "Refinery",
    city: "Clavet",
    country: "Canada",
    lat: 52.0370,
    lon: -106.2920,
    capacity: "N/A",  // ~1,500,000 MT/yr
    rawMaterial: "CANOLA"
  },
  {
    name: "STANDERTON",
    company: "COFCO INTERNATIONAL",
    type: "Crushing Plant",
    city: "Standerton",
    country: "South Africa",
    lat: -26.9390,
    lon: 29.2410,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DUNKERQUE",
    company: "DAUDRUY",
    type: "Refinery",
    city: "Dunkerque",
    country: "France",
    lat: 51.0340,
    lon: 2.3770,
    capacity: "1300/day",
    rawMaterial: "N/A"
  },
  {
    name: "Allseeds Yuzhny",
    company: "DELTA WILMAR",
    type: "Crushing Plant",
    city: "Yuzhny",
    country: "Ukraine",
    lat: 46.6220,
    lon: 31.1010,
    capacity: "N/A",
    rawMaterial: "SFO"
  },
  {
    name: "UKRAINE",
    company: "EXOIL TRADING",
    type: "Crushing Plant",
    city: "Cernechuy Yar",
    country: "Ukraine",
    lat: 49.8330,
    lon: 34.5830,
    capacity: "300000",
    rawMaterial: "N/A"
  },
  {
    name: "BARCELONA",
    company: "LIPSA",
    type: "Refinery",
    city: "Barcelona",
    country: "Spain",
    lat: 41.3870,
    lon: 2.1690,
    capacity: "700000",
    rawMaterial: "N/A"
  },
  {
    name: "FRONTERA",
    company: "LIPSA",
    type: "Refinery",
    city: "Frontera",
    country: "Spain",
    lat: 36.1260,
    lon: -5.4460,
    capacity: "N/A",
    rawMaterial: "CPO, DSBO, SFO, RSO"
  },
  {
    name: "KLAIPEDA",
    company: "MESTILLA",
    type: "Crushing Plant, Refinery",
    city: "Klaipeda",
    country: "Lithuania",
    lat: 55.7030,
    lon: 21.1440,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "ROTTERDAM",
    company: "NESTE",
    type: "Refinery",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244,
    lon: 4.4777,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "NEUSS",
    company: "O. & L. SELS GMBH",
    type: "Refinery",
    city: "Neuss",
    country: "Germany",
    lat: 51.1980,
    lon: 6.6850,
    capacity: "300000",
    rawMaterial: "RSO"
  },
  {
    name: "DUSSELDORF",
    company: "O. & L. SELS GMBH",
    type: "Refinery",
    city: "Düsseldorf",
    country: "Germany",
    lat: 51.2270,
    lon: 6.7730,
    capacity: "N/A",
    rawMaterial: "RSO"
  },
  {
    name: "NIGERIA",
    company: "OLAM",
    type: "Crushing Plant, Refinery",
    city: "Lagos",
    country: "Nigeria",
    lat: 6.4650,
    lon: 3.4060,
    capacity: "N/A",
    rawMaterial: "CPO"
  },
  {
    name: "ROTTERDAM",
    company: "OLENEX",
    type: "Refinery",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244,
    lon: 4.4777,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "STAVCHANY",
    company: "OLIYAR",
    type: "Crushing Plant",
    city: "Stavchany",
    country: "Ukraine",
    lat: 49.7330,
    lon: 23.9010,
    capacity: "3200 MT/day",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "STAVCHANY",
    company: "OLIYAR",
    type: "Refinery",
    city: "Stavchany",
    country: "Ukraine",
    lat: 49.7330,
    lon: 23.9010,
    capacity: "N/A",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "ROSTOCK",
    company: "POWEROIL",
    type: "Crushing Plant, Refinery",
    city: "Rostock",
    country: "Germany",
    lat: 54.0833,
    lon: 12.1330,
    capacity: "1000000",
    rawMaterial: "RSO"
  },
  {
    name: "BEZIERS",
    company: "PROVENCE HUILES",
    type: "Crushing Plant",
    city: "Beziers",
    country: "France",
    lat: 43.3440,
    lon: 3.2150,
    capacity: "N/A",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "VITROLLES",
    company: "PROVENCE HUILES",
    type: "Refinery",
    city: "Vitrolles",
    country: "France",
    lat: 43.4350,
    lon: 5.2480,
    capacity: "N/A",
    rawMaterial: "DSBO, SFO, RSO"
  },
  {
    name: "YORKTON",
    company: "RICHARDSON",
    type: "Crushing Plant",
    city: "Yorkton",
    country: "Canada",
    lat: 51.2170,
    lon: -102.4670,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "HAMBURG",
    company: "RIECKERMANN",
    type: "Refinery",
    city: "Hamburg",
    country: "Germany",
    lat: 53.5510,
    lon: 9.9930,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "GRAND-COURONNE",
    company: "SAIPOL (AVRIL)",
    type: "Crushing Plant, Refinery",
    city: "Grand-Couronne",
    country: "France",
    lat: 49.3630,
    lon: 1.0010,
    capacity: "1000000",
    rawMaterial: "RSO"
  },
  {
    name: "LE MERIOT",
    company: "SAIPOL (AVRIL)",
    type: "Crushing Plant, Refinery",
    city: "Le Meriot",
    country: "France",
    lat: 48.5230,
    lon: 3.5850,
    capacity: "N/A",
    rawMaterial: "RSO"
  },
  {
    name: "BASSENS",
    company: "SAIPOL (AVRIL)",
    type: "Crushing Plant, Refinery",
    city: "Bassens",
    country: "France",
    lat: 44.9200,
    lon: -0.5330,
    capacity: "700000",
    rawMaterial: "RSO, SFO"
  },
  {
    name: "LEZOUX",
    company: "SAIPOL (AVRIL)",
    type: "Crushing Plant",
    city: "Lezoux",
    country: "France",
    lat: 45.8680,
    lon: 3.3830,
    capacity: "N/A",
    rawMaterial: "SFO"
  },
  {
    name: "SETE",
    company: "SAIPOL (AVRIL)",
    type: "Crushing Plant, Refinery",
    city: "Sète",
    country: "France",
    lat: 43.4070,
    lon: 3.7000,
    capacity: "600000",
    rawMaterial: "RSO"
  },
  {
    name: "Paunküla",
    company: "SCANOLA BALTIC",
    type: "Crushing Plant, Refinery",
    city: "Paunküla",
    country: "Estonia",
    lat: 59.2180,
    lon: 25.5680,
    capacity: "N/A",
    rawMaterial: "RSO"
  },
  {
    name: "ROTTERDAM",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9244,
    lon: 4.4777,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "LIVERPOOL",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Liverpool",
    country: "United Kingdom",
    lat: 53.4080,
    lon: -2.9910,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "ZWIJNDRECHT",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Zwijndrecht",
    country: "Netherlands",
    lat: 51.8170,
    lon: 4.6330,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Singapore",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BOKSBURG",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Boksburg",
    country: "South Africa",
    lat: -26.2120,
    lon: 28.2620,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BOUGAINVILLE",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Bougainville",
    country: "Papua New Guinea",
    lat: -6.2280,
    lon: 155.5650,
    capacity: "N/A",
    rawMaterial: "CNO"
  },
  {
    name: "PORT MORESBY",
    company: "SIME DARBY",
    type: "Refinery",
    city: "Port Moresby",
    country: "Papua New Guinea",
    lat: -9.4780,
    lon: 147.1500,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "ANDUJAR",
    company: "SOVENA",
    type: "Crushing Plant, Refinery",
    city: "Andujar",
    country: "Spain",
    lat: 38.0400,
    lon: -4.0500,
    capacity: "260000",
    rawMaterial: "SFO"
  },
  {
    name: "BRENES",
    company: "SOVENA",
    type: "Refinery",
    city: "Brenes",
    country: "Spain",
    lat: 37.5680,
    lon: -5.8350,
    capacity: "N/A",
    rawMaterial: "SFO"
  },
  {
    name: "OLMEDO",
    company: "SOVENA",
    type: "Crushing Plant, Refinery",
    city: "Olmedo",
    country: "Spain",
    lat: 41.2890,
    lon: -4.6880,
    capacity: "160000",
    rawMaterial: "SFO, RSO"
  },
  {
    name: "NEUSS",
    company: "THYWISSEN",
    type: "Refinery",
    city: "Neuss",
    country: "Germany",
    lat: 51.1980,
    lon: 6.6850,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "Cernechuy Yar",
    company: "UKROLIYA",
    type: "Crushing Plant, Refinery",
    city: "Cernechuy Yar",
    country: "Ukraine",
    lat: 49.8330,
    lon: 34.5830,
    capacity: "61000",
    rawMaterial: "SFO"
  },
  {
    name: "Cernechuy Yar",
    company: "UKROLIYA",
    type: "Crushing Plant, Refinery",
    city: "Cernechuy Yar",
    country: "Ukraine",
    lat: 49.8330,
    lon: 34.5830,
    capacity: "7000",
    rawMaterial: "SFO BIO"
  },
  {
    name: "SLASKIE",
    company: "UPFIELD",
    type: "Refinery",
    city: "Katowice",
    country: "Poland",
    lat: 50.2700,
    lon: 19.0390,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "DEINZE",
    company: "VAN DAMME",
    type: "Crushing Plant, Refinery",
    city: "Deinze",
    country: "Belgium",
    lat: 50.9810,
    lon: 3.5340,
    capacity: "N/A",
    rawMaterial: "SFO"
  },
  {
    name: "Ústí nad Labem",
    company: "VITERRA",
    type: "Crushing Plant",
    city: "Ústí nad Labem",
    country: "Czech Republic",
    lat: 50.6600,
    lon: 14.0400,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "MAGDEBURG",
    company: "VITERRA",
    type: "Refinery",
    city: "Magdeburg",
    country: "Germany",
    lat: 52.1310,
    lon: 11.6390,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "LUBMIN",
    company: "VITERRA",
    type: "Crushing Plant",
    city: "Lubmin",
    country: "Germany",
    lat: 54.1360,
    lon: 13.5920,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "BODACZOW",
    company: "VITERRA",
    type: "Crushing Plant",
    city: "Bodaczow",
    country: "Poland",
    lat: 50.7240,
    lon: 23.0450,
    capacity: "N/A",
    rawMaterial: "N/A"
  },
  {
    name: "STE AGATHE",
    company: "VITERRA",
    type: "Refinery",
    city: "Sainte Agathe",
    country: "Canada",
    lat: 49.6880,
    lon: -97.1470,
    capacity: "N/A",
    rawMaterial: "CANOLA"
  },
  {
    name: "WARDEN",
    company: "VITERRA",
    type: "Refinery",
    city: "Warden",
    country: "United States",
    lat: 46.9670,
    lon: -119.0400,
    capacity: "N/A",
    rawMaterial: "CANOLA"
  },
  {
    name: "Renova",
    company: "VITERRA",
    type: "Refinery",
    city: "Timbúes",
    country: "Argentina",
    lat: -32.6670,
    lon: -60.8000,
    capacity: "N/A",
    rawMaterial: "DSBO"
  }
];
function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[20, 0]} // Global view with good coverage of Europe, Argentina, Brazil
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; OpenStreetMap contributors'
          url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=XmaHIv1FUPKsjE50mQHV"
        />
        {facilities.map((site, index) => (
          <Marker
          key={index}
          position={[site.lat, site.lon]}
          icon={getIcon(site.type)}
        >
          <Popup>
            <strong>{site.name}</strong><br />
            {site.company}<br />
            Type: {site.type}<br />
            Location: {site.city}, {site.country}<br />
            Capacity: {site.capacity}<br />
            Raw Material: {site.rawMaterial}
          </Popup>
        </Marker>
      
        ))}
      </MapContainer>
    </div>
  );
}

export default App;