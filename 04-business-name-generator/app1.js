let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;
let random3 = Math.floor(Math.random() * 3) + 1;

let adjective1 = "Crazy", adjective2 = "Amazing", adjective3 = "Fire";
let shop1 = "Engine", shop2 = "Foods", shop3 = "Garments";
let word1 = "Bros", word2 = "Limited", word3 = "Hub";

let selectAdj = "";
let selectShop = "";
let selectWord = "";

(random1 === 1)?selectAdj = adjective1:
(random1 === 2)?selectAdj = adjective2:
(random1 === 3)?selectAdj = adjective3:
selectAdj = null;

(random2 === 1)?selectShop = shop1:
(random2 === 2)?selectShop = shop2:
(random2 === 3)?selectShop = shop3:
selectShop = null;

(random3 === 1)?selectWord = word1:
(random3 === 2)?selectWord = word2:
(random3 === 3)?selectWord = word3:
selectWord = null;

let Business_name = `${selectAdj}  ${selectShop}  ${selectWord}`;

console.log(Business_name);