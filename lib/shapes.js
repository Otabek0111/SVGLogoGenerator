class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}
class Square extends Shape {
  render() {
    return `
    <svg 
      verson = "1.1" xmlns= "http://www.w3.org/2000/svg" wisth = "300" height = "200">
      <rect x="50" height="200" width="200" fill="${this.color}">
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `
    <svg 
      verson = "1.1" xmlns= "http://www.w3.org/2000/svg" wisth = "300" height = "200">
      <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
    <svg 
      verson = "1.1" xmlns= "http://www.w3.org/2000/svg" wisth = "300" height = "200">
      <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
