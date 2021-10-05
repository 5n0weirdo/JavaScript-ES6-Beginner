const address = {
  street: "50 Lock str",
  city: "LA",
  zipCode: 8900
};

// Factory Function:
function showAdress1(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

const addressOne = showAdress1("str", "Nyc", 7865);
console.log(addressOne);


// Constructor Function
function ShowAdress2(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const addressTwo = new ShowAdress2("str2", "Washington", 1010);
console.log(addressTwo);
