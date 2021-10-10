const person = {
    firstName: "Web",
    lastName: "Dev",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//getters: access properties
//setters: change properties

person.fullName = "Web Designer";

console.log(person);
