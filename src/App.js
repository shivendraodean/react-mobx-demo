import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import logo from './logo.svg';
import './App.css';

@inject('incomeDomainStore', 'incomeUiStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={event => this.props.incomeDomainStore.setIncome(event.target.value)} placeholder="Income" className="income-input"/>
          <button type="button" onClick={() => this.props.incomeUiStore.showCalculation()} className="calculate-btn">Calculate</button>
          {this.getCalculation()}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }

  getCalculation () {
    if (!this.props.incomeUiStore.shouldShowCalculations) return null

    return (
      <div>
        <p>Income before tax: ${this.props.incomeDomainStore.incomeBeforeTax}.00</p>
        <p>Tax percentage: {this.props.incomeDomainStore.calculatedTaxPercentage}%</p>
        <p>Income after tax: ${this.props.incomeDomainStore.calculatedIncomeAfterTax}</p>
      </div>
    )
  }
}

export default App;
