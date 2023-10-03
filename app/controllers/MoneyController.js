import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";

function _drawMoney() {
  let str = 'money: $' + AppState.Money
  setText('money', str)
}

export class MoneyController {
  constructor() {
    console.log('MoneyController');
    AppState.on('Money', _drawMoney)
  }

  addMoney() {
    moneyService.addMoney()
  }
}