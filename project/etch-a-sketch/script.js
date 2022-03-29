<<<<<<< HEAD
// Create grids

// containerSize = 16 * gridSize + 15 * gap + 32 * 1;
// gridSize = 16;
const containerSize = 800;
const gap = 0;
const border = 0;
let numGrids = 32;
let gridSize = (containerSize - (numGrids - 1) * gap - (numGrids * 2) * border) / numGrids;

const container = document.querySelector('.container');
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.gap = `${gap}px ${gap}px`;

const createGrids = (numGrids) => {
    for (let i = 0; i < numGrids * numGrids; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid')
        div.style.cssText = `width: ${gridSize}px; height: ${gridSize}px; border: ${border}px solid red;`
        // div.style.cssText = `width: ${gridSize}px; height: ${gridSize}px;`
        container.appendChild(div);
    };
};

createGrids(numGrids);

// Change background color when hovering
// let color = 'black';
const hoveringFunction = (color) => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', e => {
            if (color !== 'random') {
                e.target.style.backgroundColor = color;
            };
        });
    });
}

hoveringFunction('black');
=======
// Create 16x16 grids
gridSize = 24;
gap = 10;
containerSize = 16 * gridSize + 15 * gap + 32 * 1;

container = document.querySelector('.container');
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.gap = `${gap}px`

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'grid')
    div.style.cssText = `width: ${gridSize}px; height: ${gridSize}px; border: 1px solid red;`
    container.appendChild(div);
};


// Change background color when hovering

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'red';
        // console.log(e.target);
    });
});
>>>>>>> gui

// Clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
<<<<<<< HEAD
    numGrids = Number(prompt(
        "Number of squares per side for the new grid:\n(maximum: 100)"
    ));
    gridSize = (containerSize - (numGrids-1) * gap - (numGrids * 2) * 1) / numGrids;
    container.innerHTML = "" // Delete previous grids
    createGrids(numGrids);
    hoveringFunction('red');
=======
    grids.forEach(grid => grid.style.backgroundColor = 'white');
>>>>>>> gui
});