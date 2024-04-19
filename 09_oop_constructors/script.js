const playerPrototypes = {
  name: this.name,
  xp: 0,
  gainXP: function () {
    return (this.xp += xp);
  },
  describe: function () {
    return `${name} is level  2 with ${this.xp} exp`;
  },
};

function Player(name) {
  return Object.create(playerPrototypes, {
    name: {
      value: name,
    },
  });
}

let player1 = new Player("Bob");
console.log(player1.describe());
console.log(player1.name);
