import { Apple } from "./models/apple.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  Money = loadState('money', Number)

  apples = [
    new Apple({ name: 'Red Apple', price: 5.5, imgUrl: 'https://media.istockphoto.com/id/184957624/photo/royal-gala-apples.webp?b=1&s=170667a&w=0&k=20&c=aY9bnrnnhKdlqisgzXjOwtAhiCaMEKEC0tl3dpM14u8=' }),
    new Apple({ name: 'Yellow Apple', price: 2.25, imgUrl: 'https://media.istockphoto.com/id/157672156/photo/crispin-apples.webp?b=1&s=170667a&w=0&k=20&c=L3VdJapafyNeDqypLw-zowAuZXMpgKsZeq7cxsVT85E=' }),
    new Apple({ name: 'Green Apple', price: 55, imgUrl: 'https://images.unsplash.com/photo-1512578659172-63a4634c05ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60' }),
    new Apple({ name: 'orange Apple', price: 10, imgUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JuYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
    new Apple({ name: 'blue Apple', price: 6, imgUrl: 'https://images.unsplash.com/photo-1633045422334-0313534ff82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyaXV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Apple({ name: 'purple Apple', price: 14, imgUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
