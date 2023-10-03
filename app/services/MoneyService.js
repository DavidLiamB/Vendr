import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

function _saveMoney() {
  saveState('money', AppState.Money)
}

class MoneyService {
  constructor() {
    AppState.on('Money', _saveMoney)
  }

  addMoney() {
    AppState.Money += .25
  }
}

export const moneyService = new MoneyService()