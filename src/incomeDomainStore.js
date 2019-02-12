import { action, computed, observable } from "mobx"

const taxBracket = 20000

class IncomeDomainStore {
  @observable incomeBeforeTax = 0

  @action setIncome (incomeAmount) {
    this.incomeBeforeTax = parseInt(incomeAmount)
  }

  @computed get calculatedTaxPercentage () {
    return this.incomeBeforeTax < taxBracket ? 10 : 20
  }

  @computed get calculatedIncomeAfterTax () {
    if (this.incomeBeforeTax < taxBracket) {
      return this.incomeBeforeTax * 0.9
    }

    return this.incomeBeforeTax * 0.8
  }
}

export default IncomeDomainStore