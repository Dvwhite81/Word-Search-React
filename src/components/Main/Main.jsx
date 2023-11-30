import { useEffect, useState } from 'react';
import PhaseOne from '../PhaseOne/PhaseOne';
import './Main.css';
import PhaseTwo from '../PhaseTwo/PhaseTwo';
import PhaseThree from '../PhaseThree/PhaseThree';

function Main() {
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const [isPhaseTwo, setIsPhaseTwo] = useState(false);
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (!isPhaseOne) {
      setIsPhaseTwo(true);
    }
  }, [isPhaseOne]);

  return isPhaseOne ? (
    <PhaseOne setFalse={setIsPhaseOne} setSize={setSize} />
  ) : isPhaseTwo ? (
    <PhaseTwo setFalse={setIsPhaseTwo} size={size} />
  ) : (
    <PhaseThree />
  );
}

export default Main;
