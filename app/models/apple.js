export class Apple {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get appleHtml() {
    return `
    <div class="col-4 px-3">
        <div id="${this.name}" onclick="app.ApplesController.buyApple(id)" class="bg-dark" role="button">
          <img
            src="${this.imgUrl}"
            alt="apple">
          <div class="d-flex justify-content-between p-2 text-light">
            <p>${this.name}</p>
            <p>cost: $${this.price}</p>
          </div>
        </div>
      </div>
    `
  }
}