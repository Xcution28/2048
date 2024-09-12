export class Cell {
    constructor(grid_element, x, y) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid_element.append(cell);
        this.x = x;
        this.y = y;
    }
}
