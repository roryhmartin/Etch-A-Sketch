const gridContainer = document.querySelector('.grid-container');
const form = document.getElementById('grid-size-form');
const resetGrid = document.getElementById('reset');
resetGrid.addEventListener('click', resetColorGrid);
form.addEventListener('submit', changeSizeOfGrid);

function createGridCells(gridSize) {
    // Set the grid container to display as a grid
    gridContainer.style.display = 'grid';

    // Set the number of columns and rows in the grid
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // delete all cells before continuing so we don't add on top when resizing
    let squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    // Create the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('mouseenter', changeColor);
        gridContainer.appendChild(cell);
    }
}
createGridCells(16);
function changeSizeOfGrid(e) {
    e.preventDefault(); // stop initial behavior
    const gridSize = document.querySelector('#gridInput').value;
    if (gridSize > 100) {
        return alert('Must not go above 100');
    } else if (gridSize < 2) {
        return alert('Must not go below 2');
    } else {
        return createGridCells(gridSize);
    }
}

function changeColor(e) {
    const cell = e.target;
    cell.classList.add('grid-cell-hover');
}

function resetColorGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((cell) => {
        cell.classList.remove('grid-cell-hover');
    });
}
