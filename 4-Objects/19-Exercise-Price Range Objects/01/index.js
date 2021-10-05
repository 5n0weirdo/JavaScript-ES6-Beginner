//inexpensive
//moderate
//pricey

let priceRanges = [
  {label: "$",
    tooltip: "inexpensive",
    minPerPerson: 0,
    maxxPerPerson: 10
  },
  {label: "$$",
    tooltip: "moderate",
    minPerPerson: 11,
    maxxPerPerson: 30
  },
  {label: "$$$",
    tooltip: "pricey",
    minPerPerson: 31,
    maxxPerPerson: 80
  }
];

console.log(priceRanges);
