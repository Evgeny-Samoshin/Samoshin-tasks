import Ship from './Ship'

export default class EnemyShip extends Ship {
  constructor(x, y, color) {
    super(x, y, color)
    this.width = 10;
    this.height = 10;
  }
}