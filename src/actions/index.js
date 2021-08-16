export const detailFilter = (cName) => ({
  type: 'NEW_NAME',
  payload: cName,
});

export const changeFilter = (filt) => ({
  type: 'Change',
  payload: filt,
});

export const addCoin = (coin) => ({
  type: 'CHANGE_COIN',
  payload: coin,
});
