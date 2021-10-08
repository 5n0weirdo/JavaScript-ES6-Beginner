const numbers = [1, -1, 2, 3,];

const filtered = numbers.filter((n) => { 
    return n >= 0;
});

const itemsBullet = filtered.map(n => "<li>" + n + "<li>")

//join as string : not an array anymore
const html = "<ul>" + itemsBullet.join("") + "</ul> ";

console.log(filtered);
console.log(itemsBullet);
console.log(html);