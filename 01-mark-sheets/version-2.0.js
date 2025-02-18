let percentage = 55;
let grade = "";

switch (true) {
    case percentage >= 90:
        grade = "A+";
        break;
    case percentage >= 80 && percentage < 90:
        grade = "A";
        break;
    case percentage >= 70 && percentage < 80:
        grade = "B";
        break;
    case percentage >= 60 && percentage < 70:
        grade = "C";
        break;
    case percentage >= 50 && percentage < 60:
        grade = "D";
        break;
    case percentage >= 40 && percentage < 50:
        grade = "E";
        break;
    default:
        grade = "F";
}

console.log(`You have secured ${percentage}% and ${grade} grade.`);