export class Tile {
    constructor(grid_element) {
        this.tile_element = document.createElement('div');
        this.tile_element.classList.add('tile');
        this.setValue(Math.random() > 0.5 ? 2 : 4);
        grid_element.append(this.tile_element);
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tile_element.style.setProperty('--x', x);
        this.tile_element.style.setProperty('--y', y);
    }

    setValue(value) {
        this.tile_element.textContent = value;
        const bgLightness = 100 - Math.log2(value) * 9;
        this.tile_element.style.setProperty('--bg-lightness', `${bgLightness}%`);
        this.tile_element.style.setProperty('--text-lightness', `${bgLightness < 50 ? 90 : 10}%`);
    }
}