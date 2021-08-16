const DetailsReducer = (state = 'All', action) => {
  let changedState = state;

  switch (action.type) {
    case 'NEW_NAME':
      changedState = action.payload;
      return changedState;
    default:
      return state;
  }
};

export default DetailsReducer;
