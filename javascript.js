const containerJS = document.getElementById("container");

containerJS.style.border = 0; 
containerJS.style.padding = 0;
containerJS.style.margin = 0;
containerJS.style.height = '700px';
containerJS.style.width = '700px';


containerJS.style.display = "flex";
//containerJS.style.alignItems = "center"; // or any other value
containerJS.style.flexWrap = "wrap"; // or "nowrap" to prevent wrapping 


for(let i = 0; i <=255; i++){
    // create 16x16 cells
    const gridCell = document.createElement('div');

    gridCell.setAttribute('id', `${i}`);
    gridCell.classList.add("gridClass");
    gridCell.setAttribute('style', `border:1px dotted #808080`);
    
    gridCell.style.minWidth = '40px';
    gridCell.style.minHeight = '40px';
    gridCell.style.maxWidth = '40px';
    gridCell.style.maxHeight = '40px';

    //gridCell.style.
    containerJS.appendChild(gridCell);
}

const gridClass = document.getElementsByClassName("gridClass");

for(let i = 0; i <= 255; i++) {

    gridClass[i].addEventListener("mouseover", function() {
        // Code to run when the mouse pointer enters the element (hovered)
        gridClass[i].style.backgroundColor = "red";
    });
    
/*    gridClass2[i].addEventListener("mouseout", function() {
        // Code to run when the mouse pointer exits the element (no longer hovered)
        gridClass2[i].style.backgroundColor = ""; // Reset the background color
    }); */
}
