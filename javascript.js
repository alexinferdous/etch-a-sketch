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


for(let i = 0; i <=255; i++){
    // create 16x16 cells
    const gridCell = document.createElement('div');

    gridCell.setAttribute('id', `${i}`);
    gridCell.classList.add("gridClass");
    gridCell.setAttribute('style', `border:1px dotted #808080`);
    
    //defining the size of each cell
    gridCell.style.minWidth = '40px';
    gridCell.style.minHeight = '40px';
    gridCell.style.maxWidth = '40px';
    gridCell.style.maxHeight = '40px';
    gridCell.style.margin = '0px';
    gridCell.style.padding = '0px';

    //gridCell.style.
    containerJS.appendChild(gridCell);
}

const gridClass = document.getElementsByClassName("gridClass");

for(let i = 0; i <= 255; i++) {

    gridClass[i].addEventListener("mouseover", function() {
        // Code to run when the mouse pointer enters the element (hovered)
        gridClass[i].style.backgroundColor = "red";
    });
    
}
