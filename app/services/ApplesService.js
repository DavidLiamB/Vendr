import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
class ApplesService {
  constructor() {

  }

  buyApple(apple) {
    if (AppState.Money >= apple.price) {
      AppState.Money -= apple.price
      Pop.success(`You Bought a ${apple.name}`)
    } else {
      Pop.error(`You don't have $${apple.price} for a ${apple.name}`)
    }
  }
}

export const appleService = new ApplesService()