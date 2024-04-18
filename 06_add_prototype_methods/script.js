function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
  return this.height === this.width;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect1 = new Rectangle("Rect", 10, 10);
const rect2 = new Rectangle("Rect", 30, 40);

console.log(rect1);
console.log(rect1.area());

console.log(rect1.isSquare());
console.log(rect2.isSquare());

rect1.changeName("Test");
console.log(rect1.name);

console.log(rect2.area());
