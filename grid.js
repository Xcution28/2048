import { Cell } from "./cell.js";

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE * GRID_SIZE

export class Grid {
    constructor(grid_element) {
        this.cells = [];
        for (let i = 0; i < CELLS_COUNT; i++) {
            this.cells.push(
                new Cell(grid_element, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
            );
        }
    }

    getRandomEmptyCell() {
        const empty_cells = this.cells.filter(cell => cell.isEmpty());
        const random_index = Math.floor(Math.random() * empty_cells.length);
        return empty_cells[random_index];
    }
}
