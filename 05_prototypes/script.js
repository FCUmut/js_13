function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect = new Rectangle("Rectangle 1", 20, 30);

console.log(rect); // there will be hidden property as [[Prototype]]
