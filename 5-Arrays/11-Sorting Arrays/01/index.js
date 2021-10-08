const courses = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "Java" },
];

courses.sort((first, second) => {
    const nameA = first.name.toLowerCase();
    const nameB = second.name.toLowerCase();

    //first < second : -1
    if (nameA < nameB) {
        return -1;
    }

    //first > second : 1
    if (nameA > nameB) {
        return 1;
    }

    return 0;
});

console.log(courses);










