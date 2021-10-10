function interest(pricipal, rate = 3.5, years = 5) {
    return pricipal * rate / 100 * years;

}

console.log(interest(10000));