import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import './PhaseOne.css';

function PhaseOne({ setFalse, setSize, setTheme }) {
  const [isStepOne, setIsStepOne] = useState(true);

  return (
    <div id="phase-one">
      <h1>Hello!</h1>
      {isStepOne ? (
        <StepOne setFalse={setIsStepOne} setSize={setSize} />
      ) : (
        <StepTwo setFalse={setFalse} setTheme={setTheme} />
      )}
    </div>
  );
}

export default PhaseOne;
