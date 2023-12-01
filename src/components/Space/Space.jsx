import './Space.css';

function Space({ letter, spaceSize, handleClick }) {
  const styles = {
    height: `${spaceSize}px`,
    width: `${spaceSize}px`,
  };

  return (
    <div className="space" style={styles} onClick={handleClick}>
      {letter}
    </div>
  );
}

export default Space;
