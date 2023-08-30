class Shape {
  constructor(base, height) {
    this.fillColor = "none";
    this.strokeColor = "black";
  }
}

class Triangle extends Shape {
  // Triangle class code
  constructor(base, height) {
    super(); //default from parent shape recieved here
    this.height = height;
    this.base = base;
  }

  generateSVG() {
    return `
    <svg width="${this.base}" height="${this.height}">
      <polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" 
      fill="${this.fillColor}" stroke="${this.strokeColor}" />
      <text x="${this.base / 2}" y="${this.height / 2}" fill="${
      this.strokeColor
    }" text-anchor="middle">${this.text}</text>
    </svg>
  `;
  }
}

class Circle extends Shape {
  // Circle class code
  constructor(radius) {
    super();
    this.radius = radius;
  }

  generateSVG() {
    return `
    <svg width="${this.radius * 2}" height="${this.radius * 2}">
      <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" 
      fill="${this.fillColor}" stroke="${this.strokeColor}" />
      <text x="${this.radius}" y="${this.radius}" fill="${
      this.strokeColor
    }" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>
  `;
  }
}

class Square extends Shape {
  // Square class code
  constructor(lenght) {
    super();
    this.lenght = lenght;
  }

  generateSVG() {
    return `
      <svg width="${this.length}" height="${this.length}">
        <rect width="${this.length}" height="${this.length}" 
        fill="${this.fillColor}" stroke="${this.strokeColor}" />
        <text x="${this.length / 2}" y="${this.length / 2}" fill="${
      this.strokeColor
    }" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Triangle, Circle, Square };
