import './PhaseThree.css';

function PhaseThree({ setTrue }) {
  const playAgain = () => {
    setTrue(true);
  };

  return (
    <div id="phase-three">
      <h1>Great Job!</h1>
      <h2>Play Again?</h2>
      <button
        id="play-again-btn"
        className="btn"
        type="submit"
        onClick={playAgain}
      >
        Sure!
      </button>
    </div>
  );
}

export default PhaseThree;
