import Space from '../Space/Space';
import './Board.css';

function Board({ grid, spaceSize, handleClick, styles }) {
  let id = 0;

  const incId = () => {
    return id++;
  };

  return (
    <div id="gameboard" style={styles}>
      {grid.map((row) => {
        return row.map((letter) => {
          return (
            <Space
              key={incId()}
              letter={letter}
              spaceSize={spaceSize}
              handleClick={handleClick}
            />
          );
        });
      })}
    </div>
  );
}

export default Board;
