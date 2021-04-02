export default class Ship {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 10;
    this.height = 10;
  }
  draw() {
    console.log(this.x, this.y, this.width, this.height, this.color);
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}