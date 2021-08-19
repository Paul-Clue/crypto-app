const CoinsReducer = (state = [], action) => {
  let changedState = [...state];

  switch (action.type) {
    case 'CHANGE_COIN':
      changedState = [...action.payload];
      return changedState;
    default:
      return changedState;
  }
};

export default CoinsReducer;
