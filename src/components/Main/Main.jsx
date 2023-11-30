import { useEffect, useState } from 'react';
import PhaseOne from '../PhaseOne/PhaseOne';
import PhaseTwo from '../PhaseTwo/PhaseTwo';
import PhaseThree from '../PhaseThree/PhaseThree';
import './Main.css';

function Main() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [size, setSize] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (!isPhaseOne) {
      setIsPhaseTwo(true);
    }
  }, [isPhaseOne]);

  return isPhaseOne ? (
    <PhaseOne
      setFalse={setIsPhaseOne}
      setSize={setSize}
      setTheme={setTheme}
    />
  ) : isPhaseTwo ? (
    <PhaseTwo setFalse={setIsPhaseTwo} size={size} theme={theme} />
  ) : (
    <PhaseThree />
  );
}

export default Main;
