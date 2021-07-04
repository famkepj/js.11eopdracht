var colors = ["yellow", "blue", "red", "orange"];
let c = 0;

while (c < colors.length) {
    console.log("This is color " + colors[c]);
    c++;
}


for(let c = 0; c < colors.length; c++){
    console.log("This is color " + colors[c]);
}

colors.forEach(element => console.log(element));

/*
1) while loop = 4 regels
   for loop = 3 regels
2) forEach = 1 regel
3) forEach is makkelijker leesbaar en minder fout gevoelig, omdat deze kort en overzichtelijk is.
4) 

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

ja 
*/

const object = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }