import Board from '../Board/Board';
import Modal from '../Modal/Modal';
import './PhaseTwo.css';

function PhaseTwo({
  theme,
  grid,
  words,
  numWords,
  spaceSize,
  styles,
  handleClick,
  openModal,
  closeModal,
  resetGuess,
}) {
  return (
    <div id="phase-two">
      <Modal words={words} closeModal={closeModal} />
      <h1 id="phase-two-h1">
        {theme} <span id="words-left">Words: {numWords}</span>
      </h1>
      <button
        id="show-words-btn"
        className="btn"
        type="submit"
        onClick={openModal}
      >
        Show Words
      </button>
      <Board
        grid={grid}
        spaceSize={spaceSize}
        handleClick={(e) => handleClick(e)}
        styles={styles}
      />
      <button
        id="clear-guess-btn"
        className="btn"
        type="submit"
        onClick={() => resetGuess()}
      >
        Clear Guess
      </button>
    </div>
  );
}

export default PhaseTwo;
