const containerJS = document.getElementById("container");


//defining the size and border of the container
containerJS.style.border = "1px solid #333"; 
containerJS.style.padding = 0;
containerJS.style.margin = 0;
containerJS.style.height = '672px';
containerJS.style.width = '672px';


// centering the container
const left1 = (window.innerWidth - containerJS.offsetWidth) / 2;
const top1 = (window.innerHeight - containerJS.offsetHeight) / 2;
containerJS.style.left = left1 + 'px';
containerJS.style.top = top1 + 'px';

containerJS.style.display = "flex";
containerJS.style.flexWrap = "wrap"; // or "nowrap" to prevent wrapping 

function createGrid(cellNumber) {

    for(let i = 0; i <cellNumber*cellNumber; i++){
        const gridCell = document.createElement('div');
    
        gridCell.setAttribute('id', `${i}`);
        gridCell.classList.add("gridClass");
        gridCell.setAttribute('style', `border:1px dotted #808080`);
        
        //defining the size of each cell
        const cellSize = (672/cellNumber) - 2; //subtracting 2 because border is 1 px on each side
        gridCell.style.minWidth = cellSize + 'px';
        gridCell.style.minHeight = cellSize + 'px';
        gridCell.style.maxWidth = cellSize + 'px';
        gridCell.style.maxHeight = cellSize + 'px';
        gridCell.style.margin = '0px';
        gridCell.style.padding = '0px';
    
        containerJS.appendChild(gridCell);
    }
    
    const gridClass = document.getElementsByClassName("gridClass");
    
    for(let i = 0; i <cellNumber*cellNumber; i++) {
    
        gridClass[i].addEventListener("mouseover", function() {
            // Code to run when the mouse pointer enters the element (hovered)
            const randomColor = getRandomColor();
            gridClass[i].style.backgroundColor = randomColor;
        });
        
    }

}


createGrid(16);

const button = document.getElementById("btn");
button.addEventListener("click", function(){
    containerJS.innerHTML= '';
    const userInput = prompt("Please enter the number of grids in one side: ")
    createGrid(userInput);
});

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }