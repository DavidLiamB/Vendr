import { AboutController } from "./controllers/AboutController.js";
import { ApplesController } from "./controllers/ApplesController.js";
import { MoneyController } from "./controllers/MoneyController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { AppView } from "./views/AppleView.js";


export const router = [
  {
    path: '',
    controller: [MoneyController, ApplesController],
    view: AppView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]