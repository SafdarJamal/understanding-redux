const setWithDrawAmount = amount => {
  return {
    type: 'WITHDRAW_MONEY',
    amount
  };
};

const setDepositAmount = amount => {
  return {
    type: 'DEPOSIT_MONEY',
    amount
  };
};

const giveAway = () => {
  return {
    type: 'GIVE_AWAY'
  };
};

export { setWithDrawAmount, setDepositAmount, giveAway };
