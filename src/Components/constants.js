export const multiplicationFactorOptions = [
    {value:2.5, label:2.5},
    {value:2.6, label:2.6},
    {value:2.7, label:2.7},
    {value:2.8, label:2.8},
    {value:2.9, label:2.9},
    {value:3, label:3},
    {value:3.1, label:3.1},
    {value:3.2, label:3.2},
    {value:3.3, label:3.3},
    {value:3.4, label:3.4},
    {value:3.5, label:3.5}
];


export { getSupplierOptions as suppliers } from './supplierData';



export const brands = {
  "VF_SCANDINAVIA_A/S": [
    { value: "Timberland", label: "Timberland" },
    { value: "Eastpak", label: "Eastpak" }
  ],
  Marc_OPolo_International_GmbH: [
    { value: "Denim", label: "Denim" },
    { value: "Other", label: "Other" }
  ],
  ADIDAS_SUOMI_OY: [
    { value: "(RTW)", label: "ADIDAS_SUOMI_OY(RTW)" },
    { value: "(Sports)", label: "ADIDAS_SUOMI_OY(Sports)" }
  ]
};



  export const buyers = ["Anne Karhunen", "Antti Laiho", "Anu Kurki", "Eeva Siirama", "Eva Grondahl-Mykra", "Johanna Tarma", "Julia Koskilahti", "Katariina Ketola", "Kati Karhunsaari", "Kati Lewis-Sjoberg", "Kristiina Kuuskoski", "Laura Oksanen", "Maisa Jaansivu", "Michele Eller", "Minna Fichera", "Paivi Aho", "Paivi Jordas", "Pete Rahikainen", "Tiina Kuusvuori", "Tuula Luomi", "Ulrika Hedman"];
  //const seasons = ["Continuity","2023 SS","2023 AW","2024 SS","2024 AW","Seasonal"];
  export  const seasons = [
    { value: 1, label: "Continuity" },
    { value: 7, label: "2026 SS" },
    { value: 8, label: "2026 AW" },
    { value: 5, label: "2025 SS" },
    { value: 6, label: "2025 AW" },
    { value: 500, label: "Seasonal" },
    { value: 800, label: "2024 SS" },
    { value: 801, label: "2024 AW" }
  ];
  export const phases = {
    1: [
      { value: 1, label: "Active" },
      { value: 2, label: "Temporarily Unavailable" },
      { value: 3, label: "Discontinued"},
      { value: 4, label: "Retired"},
      { value: 5, label: "Customer Orders"},
      { value: 6, label: "Dummy Customer Orders"},
      { value: 7, label: "Manual Replenishment"},
      { value: 8, label: "Promotional"}
    ],
    5: [
      { value: 1, label: "Pre Spring" },
      { value: 2, label: "Spring Main Collection" },
      { value: 3, label: "High Summer"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "EASTER"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 1"},
      { value: 11, label: "Drop 2"},
      { value: 12, label: "Drop 3"},
      { value: 13, label: "Drop 4"},
      { value: 14, label: "Drop 5"},
      { value: 15, label: "Drop 6"}
    ],
    6: [
      { value: 1, label: "Pre Fall" },
      { value: 2, label: "Autumn Main Collection" },
      { value: 3, label: "Winter Collection"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "Christmas"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 7"},
      { value: 11, label: "Drop 8"},
      { value: 12, label: "Drop 9"},
      { value: 13, label: "Drop 10"},
      { value: 14, label: "Drop 11"},
      { value: 15, label: "Drop 12"}
    ],
    7: [
      { value: 1, label: "Pre Spring" },
      { value: 2, label: "Spring Main Collection" },
      { value: 3, label: "High Summer"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "EASTER"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 1"},
      { value: 11, label: "Drop 2"},
      { value: 12, label: "Drop 3"},
      { value: 13, label: "Drop 4"},
      { value: 14, label: "Drop 5"},
      { value: 15, label: "Drop 6"}
    ],
    8: [
      { value: 1, label: "Pre Fall" },
      { value: 2, label: "Autumn Main Collection" },
      { value: 3, label: "Winter Collection"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "Christmas"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 7"},
      { value: 11, label: "Drop 8"},
      { value: 12, label: "Drop 9"},
      { value: 13, label: "Drop 10"},
      { value: 14, label: "Drop 11"},
      { value: 15, label: "Drop 12"}
    ],
    500: [
      { value: 1, label: "Carry Over" }
    ],
    800: [
      { value: 1, label: "Pre Spring" },
      { value: 2, label: "Spring Main Collection" },
      { value: 3, label: "High Summer"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "EASTER"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 1"},
      { value: 11, label: "Drop 2"},
      { value: 12, label: "Drop 3"},
      { value: 13, label: "Drop 4"},
      { value: 14, label: "Drop 5"},
      { value: 15, label: "Drop 6"}
    ],
    801: [
      { value: 1, label: "Pre Fall" },
      { value: 2, label: "Autumn Main Collection" },
      { value: 3, label: "Winter Collection"},
      { value: 4, label: "Carry Over"},
      { value: 5, label: "Flash / In-Season"},
      { value: 6, label: "Crazy Days"},
      { value: 7, label: "LC"},
      { value: 8, label: "Christmas"},
      { value: 9, label: "Seasonal Continuity"},
      { value: 10, label: "Drop 7"},
      { value: 11, label: "Drop 8"},
      { value: 12, label: "Drop 9"},
      { value: 13, label: "Drop 10"},
      { value: 14, label: "Drop 11"},
      { value: 15, label: "Drop 12"}
    ]

    // Define phase values for other seasons as needed
  };  
  export const lifestages = ["Adult", "Kids"];
  export const genders = ["Men", "Women", "Boys","Girls","Unisex"];
  export const ST_users = ["PROKING", "ABELKAR", "BALAMAR", "CABLLAI", "OZOLSIN", "VASAIVE","LOREEGI","PAAJJOH","EXTSABA","SUKKSHA","KANDRAK","KLIMMAK","PIIPPI","HUTTING","NIKKJEN"];
  
  export const ticketTypes = [
    {value: "RF29", label: "RF29"},
    {value: "RF34", label: "RF34"},
    {value: "911F", label: "911F"},
    {value: "210F", label: "210F"},
    {value: "324F", label: "324F"},
    {value: "724F", label: "724F"},
    {value: "110F", label: "110F"},
    {value: "320F", label: "320F"},
    {value: "720F", label: "720F"},
    {value: "230F", label: "230F"},
    {value: "SE", label: "SE"}
  ];

  export const poLocations = ["Distribution Centre B&M", "Distribution Centre DR warehouse", "Helsinki Department Store", "Itis Department Store", "Jumbo Department Store", "Riga Department Store", "Tallinn Department Store", "Tampere Department Store", "Tapiola Department Store", "Turku Department Store"];
  export const poTypes = ["PRE","AdHoc","CD","LC"];
  export const poEDIs = ["Yes", "No"];
  export const orderPriceTags = ["Yes", "No"];
