const reducer = (state, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case 'WITHDRAW_MONEY':
      if (action.amount === 5000 && state.totalAmount >= 5000) {
        return {
          ...state,
          totalAmount: state.totalAmount - action.amount
        };
      } else if (action.amount === 10000 && state.totalAmount >= 10000) {
        return {
          ...state,
          totalAmount: state.totalAmount - action.amount
        };
      } else if (state.totalAmount > 0) {
        alert(`You don't have enough money to withdraw!`);
        return state;
      } else {
        alert(`You don't have any money in your account!`);
        return state;
      }
    case 'DEPOSIT_MONEY':
      return {
        ...state,
        totalAmount: state.totalAmount + action.amount
      };
    case 'GIVE_AWAY':
      if (state.totalAmount <= 0) {
        alert(`You don't have any money in your account!`);
        return state;
      } else {
        return {
          ...state,
          totalAmount: 0
        };
      }
    default:
      return state;
  }
};

export default reducer;
