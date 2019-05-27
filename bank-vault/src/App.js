import React, { Component } from 'react';
import './App.css';
import formatNumber from 'format-number';
import userPhoto from './images/userPhoto.jpg';

import { store } from './store';
import { setWithDrawAmount, setDepositAmount, giveAway } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.withDrawMoney = this.withDrawMoney.bind(this);
    this.depositMoney = this.depositMoney.bind(this);
    this.giveAwayAllMoney = this.giveAwayAllMoney.bind(this);
  }

  withDrawMoney(e) {
    const amount = Number(e.target.dataset.amount);
    store.dispatch(setWithDrawAmount(amount));
  }

  depositMoney(e) {
    const amount = Number(e.target.dataset.amount);
    store.dispatch(setDepositAmount(amount));
  }

  giveAwayAllMoney() {
    store.dispatch(giveAway());
  }

  render() {
    const { totalAmount, username } = store.getState();

    return (
      <div className="App">
        <img className="App__userpic" src={userPhoto} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: '$' })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>
        <section className="App__buttons">
          <button data-amount="10000" onClick={this.withDrawMoney}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={this.withDrawMoney}>
            WITHDRAW $5,000
          </button>
          <br />
          <button data-amount="10000" onClick={this.depositMoney}>
            DEPOSIT $10,000
          </button>
          <button data-amount="5000" onClick={this.depositMoney}>
            DEPOSIT $5,000
          </button>
        </section>

        <div>
          <button className="App__giveaway" onClick={this.giveAwayAllMoney}>
            Give away all your cash to charity
          </button>
        </div>
      </div>
    );
  }
}

export default App;
