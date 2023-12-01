import Game from '../../scripts/Game';

function StepTwo({
  setFalse,
  numWords,
  setTheme,
  setGame,
  setGrid,
  setSpaceSize,
  setStyles,
}) {
  const handleSubmit = (theme) => {
    setTheme(theme);
    const game = new Game(numWords, theme);
    const size = numWords + 5;
    const grid = game.createGrid(size, size);
    const spaceSize = `calc(var(--board-size) / ${size})`;
    setSpaceSize(spaceSize);
    const styles = {
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      gridTemplateRows: `repeat(${size}, 1fr)`,
    };
    setStyles(styles);
    setGrid(grid);
    setGame(game);
    setFalse(false);
  };

  return (
    <div id="phase-three-input">
      <h3>Easy or hard?</h3>
      <div id="phase-one-btns">
        <button
          id="easy-submit"
          className="btn"
          type="submit"
          onClick={() => setDifficulty('easy')}
        >
          Easy
        </button>
        <button
          id="medium-submit"
          className="btn"
          type="submit"
          onClick={() => setDifficulty('medium')}
        >
          Medium
        </button>
        <button
          id="hard-submit"
          className="btn"
          type="submit"
          onClick={() => setDifficulty('hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default StepThree;
