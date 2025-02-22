let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;
let random3 = Math.floor(Math.random() * 3) + 1;

let adjective1 = "Crazy", adjective2 = "Amazing", adjective3 = "Fire";
let shop1 = "Engine", shop2 = "Foods", shop3 = "Garments";
let word1 = "Bros", word2 = "Limited", word3 = "Hub";

function getWord(random, word1, word2, word3) {
    return random === 1 ? word1: random === 2 ? word2: word3; 
}

let selectAdj = getWord(random1, adjective1, adjective2, adjective3);
let selectShop = getWord(random2, shop1, shop2, shop3);
let selectWord = getWord(random3, word1, word2, word3);

let Business_name = `${selectAdj}  ${selectShop}  ${selectWord}`;

console.log(Business_name);