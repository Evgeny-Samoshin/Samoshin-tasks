import Ship from './Ship'

export default class UserShip extends Ship {
  constructor(x, y, color) {
    super(x, y, color)
    this.width = 20;
    this.height = 20;
  }
}