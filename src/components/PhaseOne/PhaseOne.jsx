import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import './PhaseOne.css';

function PhaseOne({
  setFalse,
  numWords,
  setNumWords,
  setTheme,
  setGame,
  setGrid,
  setSpaceSize,
  setStyles,
}) {
  const [isStepOne, setIsStepOne] = useState(true);

  return (
    <div id="phase-one">
      <h1>Hello!</h1>
      {isStepOne ? (
        <StepOne setFalse={setIsStepOne} setNumWords={setNumWords} />
      ) : (
        <StepTwo
          setFalse={setFalse}
          numWords={numWords}
          setTheme={setTheme}
          setGame={setGame}
          setGrid={setGrid}
          setSpaceSize={setSpaceSize}
          setStyles={setStyles}
        />
      )}
    </div>
  );
}

export default PhaseOne;
