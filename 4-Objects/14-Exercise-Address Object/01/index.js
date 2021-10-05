const address = {
  street: "50 Lock str",
  city: "LA",
  zipCode: 8900
};

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);
