class Polygon {
  constructor(side, length, breadth, radius) {
    this.side = side;
    this.length = length;
    this.breadth = breadth;
    this.radius = radius;
  }

  square() {
    const area = this.side ** 2;
    return area;
  }

  rectangle() {
    const area = this.length * this.breadth;
    return area;
  }

  circle() {
    const area = this.radius * 2;
    return area;
  }
}

const area1 = new Polygon(2, 3, 4, 5);
console.log(area1.square());
console.log(area1.rectangle());
console.log(area1.circle());