export class Tile {
    constructor(grid_element) {
        this.tile_element = document.createElement('div');
        this.tile_element.classList.add('tile');
        this.value = Math.random() > 0.5 ? 2 : 4;
        this.tile_element.textContent = this.value;
        grid_element.append(this.tile_element);
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tile_element.style.setProperty('--x', x);
        this.tile_element.style.setProperty('--y', y);
    }
}
