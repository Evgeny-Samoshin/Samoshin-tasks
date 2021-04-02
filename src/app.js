import UserShip from './components/ships/UserShip'
import EnemyShip from './components/ships/EnemyShip'

let canvas = document.getElementById('game-frame')
let ctx = canvas.getContext('2d')

let shipParametres = {

}

let player = {
  x: 1,
  y: 1,
}

let enemy = {
  x: 1,
  y: 1,
}


let user = new UserShip(1, 2, 'red');

user.draw();