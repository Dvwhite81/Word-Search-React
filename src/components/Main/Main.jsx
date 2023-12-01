import { useEffect, useState } from 'react';
import {
  alreadyClicked,
  addSelected,
  removeSelected,
} from '../../scripts/game-helpers';
import PhaseOne from '../PhaseOne/PhaseOne';
import PhaseTwo from '../PhaseTwo/PhaseTwo';
import PhaseThree from '../PhaseThree/PhaseThree';
import './Main.css';

function Main() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [numWords, setNumWords] = useState(null);
  const [theme, setTheme] = useState(null);
  const [guess, setGuess] = useState('');
  const [game, setGame] = useState(null);
  const [grid, setGrid] = useState(null);
  const [spaceSize, setSpaceSize] = useState(null);
  const [styles, setStyles] = useState(null);

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
    const newTotal = numWords - 1;
    console.log('newTotal:', newTotal);
    setNumWords(newTotal);
    if (newTotal <= 0) {
      console.log('numWords === 0');
      setIsPhaseTwo(false);
    }
  };

  const addToGuess = (letter) => {
    console.log('addToGuess letter:', letter);
    const guessedWord = guess + letter;
    setGuess(guessedWord);
    checkWord(guessedWord);
  };

  const checkWord = (guessedWord) => {
    console.log('checkWord guessedWord:', guessedWord);
    const reverse = guessedWord.split('').reverse().join('');
    if (
      game.words.includes(guessedWord) ||
      game.words.includes(reverse)
    ) {
      updateBoard();
      setGuess('');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const space = e.target;
    if (!alreadyClicked(space)) {
      addSelected(space);
      addToGuess(space.textContent);
    }
  };

  const openModal = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex';
  };

  const closeModal = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };

  const resetGuess = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach((space) => {
      removeSelected(space);
      setGuess('');
    });
  };

  useEffect(() => {
    if (!isPhaseOne) {
      setIsPhaseTwo(true);
    }
  }, [isPhaseOne]);

  return isPhaseOne ? (
    <PhaseOne
      setFalse={setIsPhaseOne}
      numWords={numWords}
      setNumWords={setNumWords}
      setTheme={setTheme}
      setGame={setGame}
      setGrid={setGrid}
      setSpaceSize={setSpaceSize}
      setStyles={setStyles}
    />
  ) : isPhaseTwo ? (
    <PhaseTwo
      theme={theme}
      grid={grid}
      words={game.words}
      numWords={numWords}
      spaceSize={spaceSize}
      styles={styles}
      handleClick={handleClick}
      openModal={openModal}
      closeModal={closeModal}
      resetGuess={resetGuess}
    />
  ) : (
    <PhaseThree />
  );
}

export default Main;
