// Create grids

// containerSize = 16 * gridSize + 15 * gap + 32 * 1;
// gridSize = 16;
const containerSize = 800;
const gap = 1;
const border = 0;
let numGrids = 16;
let gridSize = (containerSize - (numGrids-1) * gap - (numGrids * 2) * border) / numGrids;

const container = document.querySelector('.container');
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.gap = `${gap}px`

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
const hoveringFunction = () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'red';
        });
    });
}

hoveringFunction();

// Clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    numGrids = Number(prompt(
        "Number of squares per side for the new grid:\n(maximum: 100)"
    ));
    gridSize = (containerSize - (numGrids-1) * gap - (numGrids * 2) * 1) / numGrids;
    container.innerHTML = "" // Delete previous grids
    createGrids(numGrids);
    hoveringFunction();
    // grids.forEach(grid => grid.style.backgroundColor = 'white');
});