// Constructor Function
function ShowAdress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new ShowAdress("str2", "Washington", 1010);
// console.log(address1);
const address2 = new ShowAdress("str2", "Washington", 1010);
// console.log(address2);

function areEqual(address1, address2) {
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2));
