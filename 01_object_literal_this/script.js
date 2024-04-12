const rectangle = {
  name: "Rectangle",
  width: 10,
  heigth: 10,
  area: function () {
    return this.heigth * this.width;
  },

  //   area: () => {
  //     return this.heigth * this.width;
  //   }, // returns NaN
};

// it is insufficient, if we have hundreds of 'rectangle' to be create that's why we need blueprint to prevent this problem. here, 'constructors' comes to use.
const rectangle2 = {
  name: "Rectangle 2",
  width: 20,
  heigth: 20,
  area: function () {
    return this.heigth * this.width;
  },

  //   area: () => {
  //     return this.heigth * this.width;
  //   }, // returns NaN
};

console.log(rectangle.area());
console.log(rectangle2.area());

// function run() {
//   console.log(this); // returns window object
// }

// run();
