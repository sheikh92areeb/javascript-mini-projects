let num = 3;

console.log("Make Tabel by using for loop");
for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

console.log("\n");

let limit = 1;
console.log("Make Tabel by using While loop");
while(limit <= 10) {
    console.log(`${num} x ${limit} = ${num * limit}`);
    limit++;
}