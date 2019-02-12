import { action, observable } from "mobx"

class IncomeUiStore {
  @observable shouldShowCalculations = false

  @action showCalculation () {
    this.shouldShowCalculations = true
  }
}

export default IncomeUiStore