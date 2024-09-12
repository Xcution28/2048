import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const game_board = document.getElementById('game-board');

const grid = new Grid(game_board);

grid.getRandomEmptyCell().linkTile(new Tile(game_board));
