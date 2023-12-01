const alreadyClicked = (space) => {
  if (space.classList.contains('selected')) {
    return true;
  }
  return false;
};

const addSelected = (space) => {
  space.classList.add('selected');
};

const removeSelected = (space) => {
  space.classList.remove('selected');
};

export { alreadyClicked, addSelected, removeSelected };
