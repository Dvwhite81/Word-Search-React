function StepOne({ setFalse, setSize }) {
  return (
    <div id="phase-one-input">
      <h3>Please enter how many words you want to find:</h3>
      <input
        id="size-input"
        type="number"
        min={2}
        max={20}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      <button
        id="size-submit"
        className="btn"
        type="submit"
        onClick={() => setFalse(false)}
      >
        Start
      </button>
    </div>
  );
}

export default StepOne;