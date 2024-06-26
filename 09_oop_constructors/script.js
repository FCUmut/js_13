function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}
Player.prototype.gainXp = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.lvl++;
    this.points = 0;
  }

  console.log(player1.describe());
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} xp`;
};

let player1 = new Player("Bob");
player1.gainXp(5);
player1.gainXp(5);
player1.gainXp(5);
console.log(player1.name);
