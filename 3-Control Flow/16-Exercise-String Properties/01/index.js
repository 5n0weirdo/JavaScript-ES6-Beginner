let person = {
  name: "Developer",
  age: 26,
  programmingLang: "Golang",
  job: "Web Developer"
};
showProperties(person);

function showProperties(person) {
  for (let key in person) {
  if (typeof person[key] === 'string') 
    console.log(key, person[key]);
  }
}
