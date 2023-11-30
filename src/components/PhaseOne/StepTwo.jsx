function StepTwo({ setFalse, setTheme }) {
  const handleSubmit = (theme) => {
    setTheme(theme);
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
          onClick={() => handleSubmit('animals')}
        >
          Animals
        </button>
        <button
          id="food-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('food')}
        >
          Food
        </button>
        <button
          id="sports-submit"
          className="btn"
          type="submit"
          onClick={() => handleSubmit('sports')}
        >
          Sports
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
