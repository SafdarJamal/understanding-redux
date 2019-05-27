function setWithDrawAmount(amount) {
  return {
    type: 'WITHDRAW_MONEY',
    amount
  };
}

function setDepositAmount(amount) {
  return {
    type: 'DEPOSIT_MONEY',
    amount
  };
}

function giveAway() {
  return {
    type: 'GIVE_AWAY'
  };
}

export { setWithDrawAmount, setDepositAmount, giveAway };
