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
    <div id="phase-one-input">
      <h3>Please select a category:</h3>
      <div id="phase-one-btns">
        <button
          id="animals-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('ANIMALS')}
        >
          Animals
        </button>
        <button
          id="food-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('FOOD')}
        >
          Food
        </button>
        <button
          id="sports-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('SPORTS')}
        >
          Sports
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
