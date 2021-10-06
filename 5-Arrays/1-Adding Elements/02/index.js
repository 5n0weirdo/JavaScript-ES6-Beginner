const colors = ["Black", "Blue"];

colors.unshift("Red");

colors.push("Yellow");

colors.splice(2, 0, "Orange");  //[ 'Red', 'Black', 'Orange', 'Blue', 'Yellow' ]


console.log(colors);
