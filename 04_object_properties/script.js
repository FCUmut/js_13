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

const rect1 = new Rectangle("Rectangle 1", 20, 30);
const rect2 = new Rectangle("Rectangle 2", 30, 30);

console.log(rect1.name, rect2.width);
console.log(rect1["width"]);

// Add property
rect1.color = "red";

console.log(rect1);

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

console.log(rect2.perimeter());
console.log(rect2);

// Delete property
delete rect2.perimeter;

console.log(rect2);

// Check for property
console.log(rect1.hasOwnProperty("color"));
console.log(rect2.hasOwnProperty("color"));

// Get keys
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect2));

// Get entries
console.log(Object.entries(rect1)); // gives array of arrays which are contain keys and values

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== "function") {
    // to eliminate logging function
    console.log(`${key} - ${value}`);
  }
}
