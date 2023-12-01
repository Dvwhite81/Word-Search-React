import {
  addSelected,
  isSelected,
  removeSelected,
} from './game-helpers';

const PlayGame = (game, num, setIsPhaseTwo) => {
  console.log('playgame');
  let numWords = num;
  let guess = '';

  const allSpaces = document.querySelectorAll('.space');
  allSpaces.forEach((space) => {
    space.addEventListener('mousedown', handleMouseDown);
  });

  const handleMouseDown = (e) => {
    if (isFirstLetter()) {
      startGuess(e);
    } else if (!isSelected(e.target)) {
      addToGuess(e);
    }
  };

  const isFirstLetter = () => {
    const selected = document.querySelectorAll('.selected');
    return selected.length === 0;
  };

  const startGuess = (e) => {
    addToGuess(e);
    handleOtherSpaces();
  };

  const addToGuess = (e) => {
    const space = e.target;
    const letter = space.textContent;
    addSelected(space);
    const newGuess = guess + letter;
    guess = newGuess;
    checkWord(newGuess);
  };

  const handleOtherSpaces = () => {
    allSpaces.forEach((space) => {
      if (!isSelected(space)) {
        space.addEventListener('mouseenter', addToGuess);
        space.addEventListener('mouseup', handleMouseUp);
      }
    });
  };

  const handleMouseUp = (e) => {
    const container = document.getElementById('container');
    container.addEventListener('mouseup', () => {
      const selected = document.querySelectorAll('.selected');
      checkSelected(e, selected);
      allSpaces.forEach((space) => {
        space.removeEventListener('mouseenter', addToGuess);
        space.addEventListener('mousedown', handleMouseDown);
      });
    });
  };

  const updateBoard = () => {
    updateWordCount();
    const currentGuessSquares =
      document.querySelectorAll('.selected');
    currentGuessSquares.forEach((square) => {
      square.classList.add('correct');
      square.classList.remove('selected');
    });
  };

  const updateWordCount = () => {
    console.log('numWords:', numWords);
    numWords--;
    if (numWords <= 0) {
      console.log('numWords === 0');
      setIsPhaseTwo(false);
    }
  };

  const checkWord = (guessedWord) => {
    console.log('checkWord guessedWord:', guessedWord);
    const reverse = guessedWord.split('').reverse().join('');
    if (
      game.words.includes(guessedWord) ||
      game.words.includes(reverse)
    ) {
      updateBoard();
      resetGuess();
    }
  };

  const checkSelected = (e, selected) => {
    console.log('checkSelected e:', e);
    e.preventDefault();
    selected.forEach((space) => {
      const letter = space.textContent;
      addToGuess(space, letter);
    });
  };

  const resetGuess = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach((space) => {
      removeSelected(space);
      guess = '';
    });
  };
};

export default PlayGame;
