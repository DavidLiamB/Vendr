import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { appleService } from "../services/ApplesService.js";

function _drawApples() {
  let content = ''
  AppState.apples.forEach(apple => content += apple.appleHtml)
  setHTML('appleStore', content)
}

export class ApplesController {
  constructor() {
    _drawApples()
  }

  buyApple(name) {
    const boughtApple = AppState.apples.find(apple => apple.name == name)
    // @ts-ignore
    appleService.buyApple(boughtApple)
  }
}