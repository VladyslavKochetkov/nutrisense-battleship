import { Ship } from "./ship";

const SHOW_LOGS = true;
const log = (...any) => {
  if (SHOW_LOGS) console.log(...any);
};

export const generateBoard = () => {
  const board = [...new Array(10)].map(() => [...new Array(10)]);

  const ships = [
    new Ship(1),
    new Ship(1),
    new Ship(2),
    new Ship(2),
    new Ship(3),
    new Ship(4),
    new Ship(5),
  ];

  log("Ships", ships);
  log("Board", board);

  let index = ships.length - 1;

  locationCheck: while (index >= 0) {
    const ship = ships[index];

    const direction = Math.random() < 0.5 ? "LEFT" : "DOWN";

    const X = Math.floor(Math.random() * 10);
    const Y = Math.floor(Math.random() * 10);

    if (
      (direction === "LEFT" && X + ship.length > board.length) ||
      (direction === "DOWN" && Y + ship.length > board.length)
    ) {
      log(`Invalid location for ship - trying again`);
      continue;
    }

    for (let i = 0; i < ship.length; i++) {
      const localX = X + (direction === "LEFT" ? i : 0);
      const localY = Y + +(direction === "DOWN" ? i : 0);

      log(`Checking position: ${localX},${localY}`);
      if (board[localX][localY]) {
        continue locationCheck;
      }
    }

    for (let i = 0; i < ship.length; i++) {
      const localX = X + (direction === "LEFT" ? i : 0);
      const localY = Y + +(direction === "DOWN" ? i : 0);

      log(`Placing Hit Callback: ${localX},${localY}`);

      board[localX][localY] = {
        ship,
        hit: () => ship.hit(i),
      };
    }

    index--;
  }

  log("Reached End");

  return { board, ships };
};
