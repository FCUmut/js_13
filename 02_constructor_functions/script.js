function Rectangle(name, width, height) {
  // when you constructive function first letter should be uppercase
  // return this; // you don't have to manually put
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.height * this.width;
  };
}

// const rect1 = Rectangle(); // undefined
// const rect1 = new Rectangle(); // empty object
const rect1 = new Rectangle("Rectangle 1", 10, 10);

console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle("Rectangle 2", 20, 10);
const rect3 = new Rectangle("Rectangle 3", 30, 30);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

// 1. A new empty object is created
// 2. The constructor functon is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

console.log(rect1.constructor); // you can see constructor function

console.log(rect2 instanceof Rectangle); // returns 'true'
