function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, height, width) {
  Shape.call(this, name);
  this.height = height;
  this.width = width;
}

function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  // it overwrite Shape.prototype
  console.log(`Rectangle Name: ${this.name}`);
};

// Set prototype constructor
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle("Rectangle", 20, 20);
const circ = new Rectangle("Circle", 30);
// console.log(rect, circ);

rect.logName(); // will give error unless you inherit prototypes

console.log(rect.constructor);
