function faulty(m,n,o) {
    if (o == "+") {
        return m - n
    }else if (o == "-") {
        return m / n
    }else if (o == "*"){
        return m + n
    }else if (o == "/") {
        return m * n
    }
}

function calculate(m,n,o) {
    if (o == "+") {
        return m + n
    }else if (o == "-") {
        return m - n
    }else if (o == "*"){
        return m * n
    }else if (o == "/") {
        return m / n
    }
}

let m = 2;
let n = 4;
// let o = "+";
// let o = "-";
let o = "*";
// let o = "/";

let random = Math.floor(Math.random() * 100) + 1;

if (random <= 10) {
    result = faulty(m,n,o);
    console.log(result);
}else{
    result = calculate(m,n,o);
    console.log(result);
}
