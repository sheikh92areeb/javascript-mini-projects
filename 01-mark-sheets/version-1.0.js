let percentage = 89;
let grade = "";

if (percentage >= 90){
    grade = "A+";
}else if (percentage >= 80 && percentage < 90){
    grade = "A";
}else if (percentage >= 70 && percentage < 80){
    grade = "B";
}else if (percentage >= 60 && percentage < 70){
    grade = "C";
}else if (percentage >= 50 && percentage < 60){
    grade = "D";
}else if (percentage >= 40 && percentage < 50){
    grade = "E";
}else{
    grade = "F";
}

console.log(`You have secured ${percentage}% and ${grade} grade.`);