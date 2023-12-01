import animals from '../assets/words/animals';
import food from '../assets/words/food';
import sports from '../assets/words/sports';

class Game {
  constructor(size, theme) {
    this.words = getGameWords(size, theme);
    this.grid = [];
  }

  createGrid(rows, cols) {
    this.grid = Array.from({ length: rows }, () =>
      Array(cols).fill(null),
    );

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      this.fillWords(word);
    }

    this.fillEmpty();

    return this.grid;
  }

  fillWords(word) {
    const directions = [
      { row: -1, col: 0 },
      { row: 1, col: 0 },
      { row: 0, col: -1 },
      { row: 0, col: 1 },
      { row: -1, col: -1 },
      { row: -1, col: 1 },
      { row: 1, col: -1 },
      { row: 1, col: 1 },
    ];

    let placed = false;
    while (!placed) {
      const direction = randomElement(directions);
      const startRow = Math.floor(Math.random() * this.grid.length);
      const startCol = Math.floor(
        Math.random() * this.grid[0].length,
      );

      if (this.wordCanBePlaced(word, direction, startRow, startCol)) {
        this.placeWord(word, direction, startRow, startCol);
        placed = true;
      }
    }
  }

  placeWord(word, direction, startRow, startCol) {
    for (let i = 0; i < word.length; i++) {
      const row = (startRow + i) * direction.row;
      const col = (startCol + i) * direction.col;
      this.grid[row][col] = word[i];
    }
  }

  wordCanBePlaced(word, direction, startRow, startCol) {
    const length = word.length - 1;
    const endRow = (startRow + length) * direction.row;
    const endCol = (startCol + length) * direction.col;

    if (!this.wordFitsOnBoard(endRow, endCol)) {
      return false;
    }

    for (let i = 0; i <= length; i++) {
      const row = (startRow + i) * direction.row;
      const col = (startCol + i) * direction.col;
      const letter = word[i];

      if (!this.isEmptyOrSameLetter(letter, row, col)) {
        return false;
      }
    }

    return true;
  }

  wordFitsOnBoard(endRow, endCol) {
    if (
      endRow >= 0 &&
      endCol >= 0 &&
      endRow < this.grid.length &&
      endCol < this.grid[0].length
    ) {
      return true;
    }
    return false;
  }

  isEmptyOrSameLetter(letter, row, col) {
    const space = this.grid[row][col];
    if (space === null || space === letter) {
      return true;
    }
    return false;
  }

  fillEmpty() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        if (this.grid[row][col] === null) {
          this.grid[row][col] = randomElement(letters);
        }
      }
    }
  }
}

const getGameWords = (size, theme) => {
  let words;
  switch (theme) {
    case 'ANIMALS':
      words = getRandomWords(size, animals);
      break;
    case 'FOOD':
      words = getRandomWords(size, food);
      break;
    case 'SPORTS':
      words = getRandomWords(size, sports);
      break;
    default:
      break;
  }
  return words;
};

const getRandomWords = (size, words) => {
  const randomWords = [];

  while (randomWords.length < size) {
    const word = randomElement(words);
    console.log('word:', word);
    if (!randomWords.includes(word)) {
      randomWords.push(word);
    }
  }
  console.log('getRandomWords:', randomWords);
  return randomWords;
};

const randomElement = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

export default Game;
