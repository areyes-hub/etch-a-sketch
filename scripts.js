let body = document.querySelector(".body");
body.style.backgroundColor = "red";
let btnContainer = document.querySelector(".btn");
btnContainer.style.height = "40px";
btnContainer.style.width = "640px";
btnContainer.style.display = "flex";
btnContainer.flexDirection = "column";
btnContainer.justifyContent = "center";
btnContainer.style.margin = "auto";

let btn = document.createElement("button");
btn.textContent = "Grid Size";
btn.style.height = "50px";
btn.style.width = "200px";
btn.style.fontSize = "30px";
btn.style.borderRadius = "5px";
btn.style.marginLeft = "auto";
btn.style.marginRight = "auto";
btn.style.marginTop = "20px";
btn.style.marginBottom = "20px";

let nameContainer = document.querySelector(".name");
nameContainer.style.height = "40px";
nameContainer.style.width = "640px";
nameContainer.style.display = "flex";
nameContainer.flexDirection = "column";
nameContainer.justifyContent = "center";
nameContainer.alignItems = "flex-start";
nameContainer.style.marginTop = "20px";
nameContainer.style.marginLeft = "auto";
nameContainer.style.marginRight = "auto";

let gameName = document.createElement("h1");
gameName.style.margin = "auto";
gameName.style.display = "flex";
gameName.style.flexDirection = "column";
gameName.style.marginBottom = "80px";
gameName.style.marginTop = "20px";
gameName.textContent = "Etch-A-Sketch";
gameName.style.fontSize = "50px";
gameName.style.color = "yellow";

nameContainer.appendChild(gameName);
btnContainer.appendChild(btn);

btn.addEventListener("click", function cSize() {
    let size = prompt("How many sqares per side? (no more than 100): ");

    alert("Please refresh if you need to change grid size!")

    let grid = size * size - 1;
    let cellSize = Math.floor(640 / size);
    let container = document.querySelector(".container");
    body.display = "flex";
    body.justifyContent = "center";
    body.alignItems = "center";
    body.style.backgroundColor = "red";
    container.style.backgroundColor = "lightgray";
    container.style.border = "solid";
    container.style.borderColor = "black";
    container.style.height = "640px";
    container.style.width = "640px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.marginTop = "16px";
    container.style.marginLeft = "auto";
    container.style.marginRight = "auto";

    for (let j = 0; j <= grid; j++) {
        let squareX = document.createElement("div");
        squareX.className = `cell${j}`;
        squareX.style.height = `${cellSize}px`;
        squareX.style.width = `${cellSize}px`;
        squareX.style.backgroundColor = "lightgray";
        squareX.style.display = "flex";
        squareX.style.flexDirection = "row";
        squareX.style.alignItems = "center";
        squareX.style.borderCollapse = "collapse";
        container.appendChild(squareX);
    };

    // color randomization feature added
    // and commented out

    for (let c = 0; c <= grid; c++) {
        // let rColor = Math.floor(Math.random() * 255);
        // let gColor = Math.floor(Math.random() * 255);
        // let bColor = Math.floor(Math.random() * 255);

        let unit = document.querySelector(`.cell${c}`);
        unit.addEventListener("mouseover", () => {
            unit.style.backgroundColor = "darkslategray";
            // unit.style.backgroundColor =
            //     `rgb(${rColor}, ${gColor}, ${bColor})`;
        })
    };
    btnContainer.removeChild(btn);
});

