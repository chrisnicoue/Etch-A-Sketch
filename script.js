const canvas = document.querySelector(".container");
let size = 16;

function createBoard(gridSize) {
    size = gridSize
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
     
      square.style.textAlign = "center";
      
      square.style.width = 100 / size + "%";
  
      square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = "black";



      });
      canvas.appendChild(square);
    }
}
function reSize(){
    const changeSize = document.querySelector("#btn");
    changeSize.addEventListener("click", () => {
    let person = prompt("Pick a number between 1-100");
    while (person < 1 || person > 100) {
        person = prompt("That number is invalid. Choose again.");
    }
    white();
    createBoard(Number(person)); 
    
});
}
function white(){
    const clear = document.querySelector("#btn-clear");
    const boxes = document.querySelectorAll(".square");
    clear.addEventListener("click", ()=> {
        boxes.forEach((box) => {
            box.style.backgroundColor = "#f5f5dc";
        });

});
}



createBoard(size);
reSize();
white();


console.log("called");
