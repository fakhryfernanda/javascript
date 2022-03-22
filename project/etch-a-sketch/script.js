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

// Clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    grids.forEach(grid => grid.style.backgroundColor = 'white');
});