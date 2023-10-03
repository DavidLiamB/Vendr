import { AppState } from "../AppState.js";

export const AppView = /*html*/`
<section class="row bg-dark">
  <div class="col-6 p-3">
    <div>
      <p id="money" class="fs-3 text-light">money: $${AppState.Money}</p>
    </div>
  </div>
  <div class="col-6 text-end p-3">
    <div>
      <button onclick="app.MoneyController.addMoney()" class="btn btn-success">add .25</button>
    </div>
  </div>
</section>
<section id="appleStore" class="row">
</section>
`