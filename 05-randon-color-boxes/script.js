// Array of predefined colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#FFC733", "#FF8C33", "#8C33FF", "#33FF8C",
    "#FF3333", "#3333FF", "#F5A623", "#23A6F5", "#A6F523"
  ];
  
  // Select all boxes
  const boxes = document.querySelectorAll(".box");
  
  // Function to get a random color
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Assign random colors to each box
  boxes.forEach(box => {
    let textColor = getRandomColor();
    let bgColor = getRandomColor();
    
    // Ensure text and background colors are not the same
    while (textColor === bgColor) {
      bgColor = getRandomColor();
    }
  
    box.style.color = textColor;
    box.style.backgroundColor = bgColor;
  });
  



  // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 


// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })
