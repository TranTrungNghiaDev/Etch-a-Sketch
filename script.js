let body = document.querySelector("body");
const MAX_GRIDS = 100;
let columnDivs;

function createNewGrid(gridNumber = 16) {
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container");
    body.appendChild(containerDiv);

    let startGrid = 1;
    let endGrid = gridNumber;

    for (let row = startGrid; row <= endGrid; row++) {
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row");
        for (let column = startGrid; column <= endGrid; column++) {
            let columnDiv = document.createElement("div");
            columnDiv.setAttribute("class", "column");
            rowDiv.appendChild(columnDiv);
        }
        containerDiv.appendChild(rowDiv);
    }
}

function removeCurrentGrid() {
    let containerDiv = document.querySelector("#container");
    body.removeChild(containerDiv);
}

function randomRGBColor() {
    let result;
    let redValue = Math.round(Math.random() * 255);
    let greenValue = Math.round(Math.random() * 255);
    let blueValue = Math.round(Math.random() * 255);
    result = `rgb(${redValue},${greenValue},${blueValue})`;

    return result
}

function addEventForColumns() {
    columnDivs = document.querySelectorAll(".column");
    const DEFAULT_COLOR = "rgb(255, 255, 255)";

    for (const column of columnDivs) {
        column.addEventListener("mouseover", () => {          
            
            let columnStyle = getComputedStyle(column, "backgroundColor");

            if(columnStyle.backgroundColor == DEFAULT_COLOR) {
                column.style.backgroundColor = randomRGBColor();
            }

            else {

                let opacity = columnStyle.opacity;
                if(opacity < 1) {
                    opacity += opacity / 10;
                    column.style.opacity = opacity;
                    
                } 
            }
            
            //column.classList.add("on-mouse-overed"); 
        })
            ;
    }
}


let newGridBtn = document.querySelector("#new-grid-button");
newGridBtn.addEventListener("click", () => {
    let numberOfGrids = prompt("Enter the numbers of grid (more than 0 but less than or equal 100)", 1);

    if (numberOfGrids && (numberOfGrids > 0 && numberOfGrids <= MAX_GRIDS)) {
        removeCurrentGrid();
        createNewGrid(numberOfGrids);
        addEventForColumns();
    }

    else {
        alert("Input number is not valid");
    }

});

createNewGrid();
addEventForColumns();
